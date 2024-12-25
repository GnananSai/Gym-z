import React, { useState, useEffect } from 'react';

const PhoneInput = ({ question = "Enter Your Phone Number", onPhoneChange, phone: initialPhone }) => {
  const [phone, setPhone] = useState(initialPhone || '');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  // Notify parent component of verification status and phone number
  useEffect(() => {
    if (verificationSuccess) {
      onPhoneChange({ value: phone, verified: true });
    } else {
      onPhoneChange({ value: phone, verified: false });
    }
  }, [verificationSuccess, phone, onPhoneChange]);

  const handleSendOtp = async () => {
    setError('');
    setSuccess(false);
    setLoading(true);

    try {
      console.log('Attempting to send OTP...');
      const response = await fetch('/api/sendOtp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({
          error: `Server error: ${response.status}`
        }));
        throw new Error(errorData.error || 'Failed to send OTP');
      }

      const data = await response.json();
      localStorage.setItem('phone', phone);
      setSuccess(true);
      setShowOtpInput(true);
      
    } catch (error) {
      setError(error.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/verifyOtp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, otp }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to verify OTP');
      }

      setVerificationSuccess(true);
      setSuccess(false);
      
    } catch (error) {
      setError(error.message || 'Failed to verify OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-16 bg-black text-white">
      <h1 className="text-4xl font-bold mb-8">
        {verificationSuccess 
          ? "Phone Verified Successfully!"
          : showOtpInput 
            ? "Enter OTP" 
            : question
        }
      </h1>
      
      {!showOtpInput && !verificationSuccess && (
        <div className="w-96 relative">
          <input
            type="tel"
            value={phone}
            onChange={(e) => {
              const inputPhone = e.target.value.replace(/\D/g, '');
              setPhone(inputPhone);
            }}
            className="w-full h-16 py-2 px-4 bg-transparent border-2 border-[#313131] rounded-lg text-center text-2xl font-inter font-bold"
            placeholder="Phone Number"
            maxLength={10}
          />
        </div>
      )}

      {showOtpInput && !verificationSuccess && (
        <div className="w-96 relative">
          <input
            type="text"
            value={otp}
            onChange={(e) => {
              const inputOtp = e.target.value.replace(/\D/g, '');
              setOtp(inputOtp);
            }}
            className="w-full h-16 py-2 px-4 bg-transparent border-2 border-[#313131] rounded-lg text-center text-2xl font-inter font-bold"
            placeholder="Enter OTP"
            maxLength={6}
          />
        </div>
      )}

      {error && (
        <div className="text-red-500 mt-4 text-center">
          {error}
        </div>
      )}
      
      {success && (
        <div className="text-green-500 mt-4 text-center">
          OTP sent successfully!
        </div>
      )}

      {!verificationSuccess && (
        <button 
          onClick={showOtpInput ? handleVerifyOtp : handleSendOtp}
          disabled={loading || (showOtpInput && otp.length !== 6) || (!showOtpInput && phone.length !== 10)}
          className={`mt-8 py-3 px-6 rounded-lg text-xl font-bold transition-colors ${
            loading || (showOtpInput && otp.length !== 6) || (!showOtpInput && phone.length !== 10)
              ? 'bg-gray-500 cursor-not-allowed' 
              : 'bg-white text-black hover:bg-gray-200'
          }`}
        >
          {loading 
            ? showOtpInput ? 'Verifying...' : 'Sending...'
            : showOtpInput ? 'Verify OTP' : 'Send OTP'
          }
        </button>
      )}
    </div>
  );
};

export default PhoneInput;
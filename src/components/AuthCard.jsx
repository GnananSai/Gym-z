import React, { useEffect, useRef } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import { useAuth } from '@/contexts/AuthContext';

const AuthCard = ({ onClose }) => {
  const { authMode, toggleAuthMode } = useAuth(); // Get authMode and toggleAuthMode from context

  const authCardRef = useRef(null);

  useEffect(() => {
    // Handler to close the card when clicking outside
    const handleClickOutside = (event) => {
      if (authCardRef.current && !authCardRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Clean up the event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        ref={authCardRef}
        className="relative bg-black text-white p-8 rounded-xl shadow-lg bg-opacity-40"
      >
        {/* Close Button */}
        <button
          className="absolute top-0 right-2 text-white text-4xl"
          onClick={onClose}
        >
          &times;
        </button>
        
        {/* Tabs */}
        <div className="flex justify-center text-center">
          <div
            className={`w-full cursor-pointer px-4 py-4 rounded-t-md ${authMode === 'signup' ? 'bg-white text-black' : 'bg-black'}`}
            onClick={() => toggleAuthMode('signup')}
          >
            Sign Up
          </div>
          <div
            className={`w-full cursor-pointer px-4 py-4 rounded-t-md ${authMode === 'login' ? 'bg-white text-black' : 'bg-black'}`}
            onClick={() => toggleAuthMode('login')}
          >
            Login
          </div>
        </div>
        
        {/* Content */}
        {authMode === 'signup' ? <SignUp onSuccess={onClose} /> : <Login onSuccess={onClose} />}
      </div>
    </div>
  );
};

export default AuthCard;

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

const SignUp = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { login } = useAuth();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        login(data.token); // Set JWT and update login state
        if (onSuccess) onSuccess(); // Close the auth card on success
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (error) {
      setError('Something went wrong');
    }
  };

  return (
    <div className="h-fit flex justify-center items-center">
      <div className="sm:shadow-xl p-8 bg-black rounded-xl w-96 border-2 border-[#5F5F5F] rounded-tl-none">
        <h1 className="font-semibold text-2xl mb-5 text-white">Make An Account</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              className="mb-5 p-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg w-full"
              placeholder="name@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="mb-5 p-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg w-full"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-white">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="mb-5 p-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg w-full"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="mt-5 w-full text-black bg-[#05FF00] focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center border-[#05FF00] hover:bg-white hover:text-gray-800 hover:border-gray-800"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

const initialLoginValue = {
  email: '',
  password: '',
};

const Login = ({ onSuccess }) => {
  const [login, setLogin] = useState(initialLoginValue);
  const [error, setError] = useState('');
  const { login: authLogin } = useAuth(); // Use the AuthContext to handle login

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(login),
      });

      const data = await response.json();

      if (response.ok) {
        authLogin(data.token); // Set JWT and update login state
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
      <div className="sm:shadow-xl p-8 bg-black rounded-xl w-96 border-2 border-[#5F5F5F] rounded-tr-none">
        <h1 className="font-semibold text-2xl mb-5 text-white">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
              Your Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mb-5 p-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg w-full"
              placeholder="name@email.com"
              value={login.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="mb-5 p-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg w-full"
              placeholder="••••••••"
              value={login.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="mt-5 w-full text-black bg-[#05FF00] focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center border-[#05FF00] hover:bg-white hover:text-gray-800 hover:border-gray-800"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

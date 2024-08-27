import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = ({ toggleAuthCard }) => {
  const { isLoggedIn, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      logout(); // Update the context and remove the JWT token
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between text-white p-7 bg-black font-bold z-10 fixed top-0 w-full md:pl-20 md:pr-10">
      {/* Centered Branding */}
      <div className="text-center md:text-left">
        <div className="text-2xl font-bold">GYM-Z</div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:flex gap-5 justify-center items-center flex-shrink-0">
        {isLoggedIn ? (
          <>
            {/* Profile Image Button */}
            <div className="cursor-pointer rounded-full border-2 border-white py-1 px-5 flex gap-2 items-center">
              <img
                src="/default.png" // Update with actual profile image URL
                alt="Profile"
                className="w-5 h-5 rounded-full"
              />
              {/* Logout Button */}
              <button
                className="text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
            <div className="rounded-full border-2 border-white bg-white py-1 px-7 text-black hover:bg-black hover:text-white">
              <Link href="/contact">Contact</Link>
            </div>
            {/* Take a Quiz Button */}
            <div
              className="cursor-pointer rounded-full border-2 border-[#05FF00] bg-[#05FF00] py-1 px-7 text-black hover:bg-yellow-500"
              onClick={() => toggleAuthCard('login')}
            >
              <span>Take a quiz</span>
            </div>
          </>
        ) : (
          <>
            {/* Sign In Button */}
            <div
              className="cursor-pointer rounded-full border-2 border-white py-1 px-7"
              onClick={() => toggleAuthCard('signup')}
            >
              <span>Sign in</span>
            </div>
            {/* Contact Button */}
            <div className="rounded-full border-2 border-white bg-white py-1 px-7 text-black hover:bg-black hover:text-white">
              <Link href="/contact">Contact</Link>
            </div>
            {/* Take a Quiz Button */}
            <div
              className="cursor-pointer rounded-full border-2 border-[#05FF00] bg-[#05FF00] py-1 px-7 text-black hover:bg-yellow-500"
              onClick={() => toggleAuthCard('login')}
            >
              <span>Take a quiz</span>
            </div>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={handleMenuToggle}
      >
        {isMenuOpen ? '✖' : '☰'}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-black text-white w-64 md:hidden transform transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} p-5`}
      >
        <button
          className="text-2xl mb-5"
          onClick={handleMenuToggle}
        >
          ✖
        </button>
        <div className="flex flex-col space-y-6">
          {isLoggedIn ? (
            <>
              <div className="flex items-center justify-center space-x-2">
                <img
                  src="/default.png" // Update with actual profile image URL
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <button
                  className="text-white"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
              <Link href="/contact" className='text-center'>
                <span className="text-white text-lg">Contact</span>
              </Link>
              <button
                className="text-[#05FF00] hover:text-yellow-500 text-lg"
                onClick={() => toggleAuthCard('login')}
              >
                Take a quiz
              </button>
            </>
          ) : (
            <>
              <button
                className="text-white text-lg"
                onClick={() => toggleAuthCard('signup')}
              >
                Sign in
              </button>
              <Link href="/contact" className='text-center'>
                <span className="text-white text-lg">Contact</span>
              </Link>
              <button
                className="text-[#05FF00] hover:text-yellow-500 text-lg"
                onClick={() => toggleAuthCard('login')}
              >
                Take a quiz
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

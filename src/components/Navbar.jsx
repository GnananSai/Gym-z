import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Anton } from 'next/font/google';

const anton = Anton({
  subsets: ['latin'], // Ensure this matches the font's available subsets
  weight: '400', // Optional: Ensure this matches the available weights
});

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
        <Link href="/" className={`${anton.className} text-2xl`}>
          GYM-Z
        </Link>
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
            <Link
              className="cursor-pointer rounded-full border-2 border-[#22D3FF] bg-[#22D3FF] py-1 px-7 text-black "
              href='/quiz'
            >
              Take a quiz
            </Link>
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
              className="cursor-pointer rounded-full border-2 border-[#22D3FF] bg-[#22D3FF] py-1 px-7 text-black"

            >
              <Link href="/quiz">Take a quiz</Link>
            </div>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={handleMenuToggle}
      >
        {isMenuOpen ? '☰' : '☰'}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-black bg-opacity-90 text-white w-64 md:hidden transform transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} p-5`}
      >
        <button
          className="text-2xl mb-5"
          onClick={handleMenuToggle}
        >
          ☰
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
                  onClick={() => {
                    handleLogout();
                    handleMenuToggle();
                  }}
                >
                  Logout
                </button>
              </div>
              <Link href="/contact">
                <span
                  className="text-white text-lg"
                  onClick={handleMenuToggle}
                >
                  Contact
                </span>
              </Link>
              <Link
                href="/quiz"
                className="text-[#22D3FF]  text-lg"
                onClick={handleMenuToggle}
              >
                Take a quiz
              </Link>
            </>
          ) : (
            <>
              <button
                className="text-white text-lg"
                onClick={() => {
                  toggleAuthCard('signup');
                  handleMenuToggle();
                }}
              >
                Sign in
              </button>
              <Link
                href="/contact"
                className="text-white text-lg text-center"
                onClick={handleMenuToggle}
              >
                Contact
              </Link>
              <Link
                href="/quiz"
                className="text-[#22D3FF]  text-lg text-center"
                onClick={handleMenuToggle}
              >
                Take a quiz
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

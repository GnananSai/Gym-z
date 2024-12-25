'use client'
import React, { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import AuthCard from '@/components/AuthCard';
import './globals.css'
import { Roboto } from 'next/font/google';

import AuthProvider from '@/contexts/AuthContext';

const roboto = Roboto({
  weight: ['400', '500', '700'], // You can specify different weights you need
  subsets: ['latin'],            // Subsets for the font
  style: ['normal', 'italic'],   // Add styles like normal and italic if needed
});


export default function RootLayout({ children }) {
  const [showAuthCard, setShowAuthCard] = useState(false);
  const [authMode, setAuthMode] = useState('signup');

  const toggleAuthCard = (mode) => {
    setAuthMode(mode);
    setShowAuthCard((prev) => !prev);
  };

  return (
    <AuthProvider>
      <html lang="en" className={roboto.className}>
      <body className={`${showAuthCard ? 'overflow-hidden' : ''}`}>
        <Navbar toggleAuthCard={toggleAuthCard} />
        {showAuthCard && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center"
            onClick={() => setShowAuthCard(false)}
          >
            <div
              className="bg-black p-6 rounded-xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <AuthCard 
                mode={authMode} 
                onClose={() => setShowAuthCard(false)} 
                setAuthMode={setAuthMode} 
              />
              <button
                onClick={() => setShowAuthCard(false)}
                className="absolute top-2 right-2 text-white"
              >
                x
              </button>
            </div>
          </div>
        )}
        {children}
        <Footer />
      </body>
    </html>
    </AuthProvider>
    
  );
}

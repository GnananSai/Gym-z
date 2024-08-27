import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a Context for Authentication
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authMode, setAuthMode] = useState('signup'); // 'signup' or 'login'

  useEffect(() => {
    // Check if JWT token is present in localStorage
    const token = localStorage.getItem('jwtToken');
    if (token) {
      setIsLoggedIn(true); // User is logged in
    } else {
      setIsLoggedIn(false); // User is not logged in
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('jwtToken', token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('jwtToken');
    setIsLoggedIn(false);
  };

  const toggleAuthMode = (mode) => {
    setAuthMode(mode);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, authMode, login, logout, toggleAuthMode }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

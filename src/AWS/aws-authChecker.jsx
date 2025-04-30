// aws-authChecker.jsx

// AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Create the Auth Context
const AuthContext = createContext();

// Custom hook to use the Auth Context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap the app with the context
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  // Session check function
  const checkSession = async () => {
    try {
      const session = await fetchAuthSession(); // Ensure this is the correct import
      if (session && session.tokens && session.tokens.idToken) {
        setIsAuthenticated(true); // User is authenticated
      } else {
        setIsAuthenticated(false); // No valid session
      }
    } catch (error) {
      setIsAuthenticated(false); // Handle session errors as unauthenticated
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, checkSession }}>
      {children}
    </AuthContext.Provider>
  );
};
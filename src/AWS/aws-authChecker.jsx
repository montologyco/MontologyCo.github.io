// aws-authChecker.jsx

import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'; // Assuming you're using React Router

const AuthChecker = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for the token in localStorage (or sessionStorage, cookies)
    const token = localStorage.getItem('authToken'); // Adjust key based on where your token is stored

    if (token) {
      setIsAuthenticated(true); // Token exists, so user is authenticated
    } else {
      setIsAuthenticated(false); // Token does not exist, so user is not authenticated
    }
  }, []); // Empty array means this runs once when the component mounts

  if (!isAuthenticated) {
    return <Redirect to="/login" />; // Redirect to login page if not authenticated
  }

  return children; // Allow access to the children components if authenticated
};

export default AuthChecker;

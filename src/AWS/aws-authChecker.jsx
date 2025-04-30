// aws-authChecker.jsx

import React, { useState, useEffect } from 'react';
import { SignIn, SignOut } from 'aws-amplify'; // Check if you're using this instead of Auth

const AuthChecker = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Use SignIn method to check if the user is signed in
        const user = await SignIn.currentUser();
        setIsAuthenticated(true); // User is signed in
      } catch (error) {
        setIsAuthenticated(false); // User is not signed in
      }
    };

    checkAuth();
  }, []);

  if (!isAuthenticated) {
    return <Redirect to="/login" />; // Redirect to login if not authenticated
  }

  return children; // Render children if authenticated
};

export default AuthChecker;
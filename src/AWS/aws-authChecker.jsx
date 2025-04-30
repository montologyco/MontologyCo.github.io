// aws-authChecker.jsx

import { useEffect, useState } from 'react';
import { fetchAuthSession } from '@aws-amplify/core';

const AuthChecker = ({ setAuthState }) => {
  const checkSession = async () => {
    try {
      const session = await fetchAuthSession();
      
      if (session && session.tokens && session.tokens.idToken) {
        setAuthState(true); // User is authenticated
      } else {
        setAuthState(false); // No valid session
      }
    } catch (error) {
      console.error("Error checking session:", error);
      setAuthState(false); // Handle session errors as unauthenticated
    }
  };

  useEffect(() => {
    checkSession(); // Check session on mount (for initial load)
  }, []);

  // Optionally, you can refresh the session every 30 seconds for extra security.
  useEffect(() => {
    const sessionChecker = setInterval(() => {
      checkSession(); // Check session every 30 seconds
    }, 30000);

    return () => clearInterval(sessionChecker);
  }, []);

  return null; // No need to render anything
};

export default AuthChecker;
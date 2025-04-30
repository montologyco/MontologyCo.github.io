// aws-authChecker.jsx

import { useEffect } from 'react';
import { fetchAuthSession } from '@aws-amplify/core';

const AuthChecker = ({ setAuthState }) => {
  const checkSession = async () => {
    try {
      const session = await fetchAuthSession();
      // If the session exists and has a valid idToken, the user is authenticated
      if (session && session.tokens && session.tokens.idToken) {
        setAuthState(true); // User is authenticated
      } else {
        setAuthState(false); // User is not authenticated
      }
    } catch (error) {
      console.error("Error checking session:", error);
      setAuthState(false); // Handle session errors as unauthenticated
    }
  };

  useEffect(() => {
    checkSession(); // Initial session check when the component mounts

    const interval = setInterval(() => {
      checkSession(); // Periodically recheck the session every 30 seconds (adjust as needed)
    }, 30000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []); // Empty dependency array ensures this effect runs once on mount and cleans up when unmounted

  return null; // No UI is rendered by this component
};

export default AuthChecker;
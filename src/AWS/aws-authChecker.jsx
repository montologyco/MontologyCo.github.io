// aws-authChecker.jsx

import { useEffect } from 'react';
import { fetchAuthSession } from '@aws-amplify/core';

const AuthChecker = ({ setAuthState }) => {
  // Check session function
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

  // Check session when the component mounts
  useEffect(() => {
    checkSession(); // Check session on initial load
  }, []);

  // Optionally, you can refresh the session every 30 seconds for extra security.
  useEffect(() => {
    const sessionChecker = setInterval(() => {
      checkSession(); // Check session every 30 seconds
    }, 30000);

    return () => clearInterval(sessionChecker); // Cleanup interval on component unmount
  }, []);

  // Add an event listener to check session on every user action (clicks, navigation, etc.)
  useEffect(() => {
    const handleUserAction = () => {
      checkSession(); // Trigger session check on any user interaction
    };

    // Add event listeners for clicks, touches, or any other action you want to trigger the check
    document.addEventListener('click', handleUserAction);
    document.addEventListener('keydown', handleUserAction); // Optional: check on keyboard actions

    // Cleanup listeners when the component unmounts
    return () => {
      document.removeEventListener('click', handleUserAction);
      document.removeEventListener('keydown', handleUserAction);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AuthChecker;
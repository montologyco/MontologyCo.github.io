// aws-authChecker.jsx

import { useEffect, useState } from 'react';
import { fetchAuthSession } from '@aws-amplify/core';

const AuthChecker = ({ setAuthState }) => {
  const checkSession = async () => {
    try {
      const session = await fetchAuthSession();
      // console.log("Session info:", session);

      if (session && session.tokens && session.tokens.idToken) {
        // console.log("User is authenticated");
        setAuthState(true); // Set authenticated state to true
      } else {
        // console.log("No valid session found");
        setAuthState(false); // Set authenticated state to false
      }
    } catch (error) {
      console.error("Error checking session:", error);
      setAuthState(false); // Handle session errors as unauthenticated
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return null; // No need to render anything here
};

export default AuthChecker;

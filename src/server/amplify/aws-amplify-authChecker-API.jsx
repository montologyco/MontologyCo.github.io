// aws-amplify-authChecker-API.jsx

import { useEffect } from 'react';
import { fetchAuthSession } from '@aws-amplify/core';

const AuthChecker = ({ setAuthState }) => {
  const checkSession = async () => {
    try {
      const session = await fetchAuthSession();
      
      if (session && session.tokens && session.tokens.idToken) {
        setAuthState(true);
      } else {
        setAuthState(false);
      }
    } catch (error) {
      console.error("Error checking session:", error);
      setAuthState(false);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  useEffect(() => {
    const sessionChecker = setInterval(() => {
      checkSession();
    }, 30000); // Check session every 30 seconds

    return () => clearInterval(sessionChecker);
  }, []);

  useEffect(() => {
    const handleUserAction = () => {
      checkSession();
    };

    document.addEventListener('click', handleUserAction);
    document.addEventListener('keydown', handleUserAction);

    return () => {
      document.removeEventListener('click', handleUserAction);
      document.removeEventListener('keydown', handleUserAction);
    };
  }, []);

  return null;
};

export default AuthChecker;
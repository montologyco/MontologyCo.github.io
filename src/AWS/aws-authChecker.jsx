// aws-authChecker.jsx

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchAuthSession } from '@aws-amplify/core';

const checkSession = async () => {
  try {
    const session = await fetchAuthSession();
    console.log("Session info:", session);

    if (session && session.tokens && session.tokens.idToken) {
      console.log("User is authenticated");
    } else {
      console.log("No valid session found");
      <Routes>
        <Route path="/" element={<MontologyTagline />} />
      </Routes>
    }
  } catch (error) {
    console.error("Error checking session:", error);
  }
};

const AuthChecker = ({ children }) => {
  useEffect(() => {
    checkSession();
  }, []);

  return children;
};

export default AuthChecker;

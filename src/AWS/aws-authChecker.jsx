// aws-authChecker.jsx

import { useEffect, useState } from 'react';
import { fetchAuthSession } from '@aws-amplify/core';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../components/body/Dashboard.jsx';
import MontologyTagline from '../assets/Brand/MontologyTagline.jsx';

const AuthChecker = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const checkSession = async () => {
    try {
      const session = await fetchAuthSession();
      console.log("Session info:", session);

      if (session && session.tokens && session.tokens.idToken) {
        console.log("User is authenticated");
        setIsAuthenticated(true);
      } else {
        console.log("No valid session found");
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error checking session:", error);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      {isAuthenticated ? (
        <Route path="/" element={<Dashboard />} />
      ) : (
        <Route path="/" element={<MontologyTagline />} />
      )}
    </Routes>
  );
};

export default AuthChecker;
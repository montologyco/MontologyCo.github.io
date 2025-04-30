// aws-authChecker.jsx

import { useEffect, useState } from 'react';
import { fetchAuthSession } from '@aws-amplify/core';
import { Routes, Route } from 'react-router-dom';

import MontologyTagline from '../assets/Brand/MontologyTagline.jsx';
import Dashboard from '../components/body/Dashboard.jsx';

import About from '../components/body/Boilerplate/About.jsx';
import Contact from '../components/body/Boilerplate/Contact.jsx';
import FAQ from '../components/body/Boilerplate/FAQ.jsx';

import Login from '../components/body/Login.jsx';
import Logout from '../components/body/Logout.jsx';


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
        <>
          <Route path="/" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
        </>
      ) : (
        <>
          <Route path="/" element={<MontologyTagline />} />
          <Route path="/login" element={<Login />} />
        </>
      )}

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/FAQ" element={<FAQ />} />
    </Routes>
  );
};

export default AuthChecker;
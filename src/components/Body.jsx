// Body.jsx

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthChecker from '../AWS/aws-authChecker.jsx';

import MontologyTagline from '../assets/Brand/MontologyTagline.jsx';
import Dashboard from '../components/body/Dashboard.jsx';
import Login from '../components/body/Login.jsx';
import Logout from '../components/body/Logout.jsx';

import About from '../components/body/Boilerplate/About.jsx';
import Contact from '../components/body/Boilerplate/Contact.jsx';
import FAQ from '../components/body/Boilerplate/FAQ.jsx';

function Body({ isAuthenticated, setIsAuthenticated}) {

  return (
    <div id="body">
      <Routes>
        {isAuthenticated ? (
          <>
            {/* <AuthChecker setAuthState={setIsAuthenticated} /> */}
            <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Navigate to="/" />} />
              <Route path="/login" element={<Navigate to="/" />} />
            <Route path="/logout" element={<Logout />} />
          </>
        ) : (
          <>
            <Route path="/" element={<MontologyTagline />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/dashboard" element={<Navigate to="/login" />} />
          </>
        )}

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default Body;
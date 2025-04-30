// Body.jsx

import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; // Import Navigate for redirects
import AuthChecker from '../AWS/aws-authChecker.jsx';

import MontologyTagline from '../assets/Brand/MontologyTagline.jsx';
import Dashboard from '../components/body/Dashboard.jsx';
import Login from '../components/body/Login.jsx';
import Logout from '../components/body/Logout.jsx';

import About from '../components/body/Boilerplate/About.jsx';
import Contact from '../components/body/Boilerplate/Contact.jsx';
import FAQ from '../components/body/Boilerplate/FAQ.jsx';

function Body() {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Authentication state

  // if (isAuthenticated === null) {
  //   return <div>Loading...</div>; // Loading state while checking authentication
  // }

  return (
    <div id="body">
      <AuthChecker setAuthState={setIsAuthenticated} /> {/* Check authentication */}
      <Routes>
        {isAuthenticated ? (
          <>
            {/* Redirect /dashboard to / */}
            <Route path="/dashboard" element={<useNavigate to="/" />} />
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
    </div>
  );
}

export default Body;
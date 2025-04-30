// Body.jsx

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import MontologyTagline from '../assets/Brand/MontologyTagline.jsx';
import Dashboard from '../components/body/Dashboard.jsx';

import Contacts from '../components/body/Contacts.jsx';

import Login from './auth/Login.jsx';
import Logout from './auth/Logout.jsx';
import Settings from './auth/Settings.jsx';

import About from './boilerplate/About.jsx';
import Contact from './boilerplate/Contact.jsx';
import FAQ from './boilerplate/FAQ.jsx';

function Body({ isAuthenticated, setIsAuthenticated}) {

  return (
    <div id="body">
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Dashboard setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/dashboard" element={<Navigate to="/" />} />
              <Route path="/login" element={<Navigate to="/" />} />
            
            <Route path="/contacts" element={<Contacts setIsAuthenticated={setIsAuthenticated} />} />
            
            <Route path="/logout" element={<Logout setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/settings" element={<Settings setIsAuthenticated={setIsAuthenticated} />} />
          </>
        ) : (
          <>
            <Route path="/" element={<MontologyTagline />} />
              <Route path="/logout" element={<Navigate to="/" />} />

            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/dashboard" element={<Navigate to="/login" />} />
              <Route path="/settings" element={<Navigate to="/login" />} />
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
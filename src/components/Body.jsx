// Body.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MontologyTagline from '../assets/Brand/MontologyTagline.jsx';
import About from './body/Boilerplate/About.jsx';
import Contact from './body/Boilerplate/Contact.jsx';
import FAQ from './body/Boilerplate/FAQ.jsx';

import Login from './body/Login.jsx';

import Dashboard from './body/Dashboard.jsx';

function Body({loggedIn}) {
  return (
    <div id="body">
      <Routes>
        {!loggedIn ? (
          <Route path="/" element={<MontologyTagline />} />
        ) : (
          <Route path="/" element={<Dashboard />} />
        )}

        <Route path="/login" element={<Login />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default Body;
// Body.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MontologyTagline from '../assets/MontologyTagline.jsx';
import Login from './body/Login.jsx';

function Body({loggedIn}) {
  return (
    <div id="body">
      <Routes>
        {!loggedIn ? (
          <Route path="/" element={<MontologyTagline />} />
        ) : (
          <Route path="/" element={<h1>Dashboard</h1>} />
        )}
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Body;
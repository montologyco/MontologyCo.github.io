// Body.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MontologyTagline from '../assets/MontologyTagline.jsx';

function Body({loggedIn}) {
  return (
    <div id="body">
      <Routes>
        {!loggedIn ? (
        <Route path="/" element={<MontologyTagline />} />
        ) : (
        <h1>Logged In!</h1>
        )}
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
      </Routes>

      {!loggedIn ? (
        <MontologyTagline />
      ) : (
      <h1>Logged In!</h1>
      )}
    </div>
  );
}

export default Body;
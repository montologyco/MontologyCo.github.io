// Body.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MontologyTagline from '../assets/Brand/MontologyTagline.jsx';
import About from './body/Boilerplate/About.jsx';
import Contact from './body/Boilerplate/Contact.jsx';
import FAQ from './body/Boilerplate/FAQ.jsx';
import AuthChecker from '../AWS/aws-authChecker.jsx';

import Login from './body/Login.jsx';

import Dashboard from './body/Dashboard.jsx';

function Body() {
  return (
    <div id="body">
      <AuthChecker />
    </div>
  );
}

export default Body;
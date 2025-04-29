// MontologyLogo.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/IconicLogo.png';


function MontologyLogo() {
  return (
    <Link to="/"><img src={logo} alt="Montology Logo" /></Link>
  );
}

export default MontologyLogo;
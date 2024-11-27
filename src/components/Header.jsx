import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/IconicLogo.png';

function Header() {
  return (
    <>
      <header>
        <Link to="/"><img src={logo} alt="Montology Logo" /></Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
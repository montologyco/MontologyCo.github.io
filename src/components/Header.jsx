import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import logo from '../assets/IconicLogo.png';

function Header() {
  return (
    <>
      <header>
        <Link to="/"><img src={logo} alt="Montology Logo" /></Link>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/test1">Test 1</Link></li>
            <li><Link to="/test2">Test 2</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
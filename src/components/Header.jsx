import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/IconicLogo.png';
import header from '../assets/header.json';

function Header() {
  const [showInput, setShowInput] = useState(false);

  return (
    <>
      <header>
        <Link to="/"><img src={logo} alt="Montology Logo" /></Link>
        <nav>
          {header.links.map((link, index) => (
            <span key={index}>
              <a href={link.url}>{link.name}</a>
            </span>
          ))}
        </nav>
        <Link onClick={() => setShowInput(!showInput)}>Log In</Link>
        {showInput && (
          <div>
            <p>Username: <input type="text" placeholder="Username" /></p>
            <p>Password: <input type="text" placeholder="Password" /></p>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
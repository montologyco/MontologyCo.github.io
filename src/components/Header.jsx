import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/IconicLogo.png';
import Login from './Login.jsx';
import Navigation from './Navigation.jsx';

function Header({ loggedIn }) {
  const [showInput, setShowInput] = useState(false);

  return (
    <>
      <header>
        <Link to="/"><img src={logo} alt="Montology Logo" /></Link>
        <Navigation />
        <Login
          loggedIn={loggedIn}
        />
      </header>
    </>
  );
}

export default Header;
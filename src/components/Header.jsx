import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/IconicLogo.png';
import Login from './Login.jsx';
import Navigation from './Navigation.jsx';
import header from '../assets/header.json';


function Header({ loggedIn }) {

  return (
    <>
      <header>
        <Link to="/"><img src={logo} alt="Montology Logo" /></Link>
        <Navigation links = {header.links}/>
        <Login
          loggedIn={loggedIn}
        />
      </header>
    </>
  );
}

export default Header;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/IconicLogo.png';
import Login from './Login.jsx';
import Navigation from './Navigation.jsx';
import indexLinks from '../assets/indexLinks.json';
import applications from '../assets/applications.json';


function Header({ loggedIn }) {

  return (
    <>
      <header>
        <Link to="/"><img src={logo} alt="Montology Logo" /></Link>

        {!loggedIn ? (
          <Navigation links = {indexLinks.links}/>
        ) : (
          <Navigation links = {applications.links}/>
        )
        }
        <Login
          loggedIn={loggedIn}
        />
      </header>
    </>
  );
}

export default Header;
import React, { useState } from 'react';
import MontologyLogo from '../assets/MontologyLogo.jsx';
import Login from './Login.jsx';
import NavigationBridge from './NavigationBridge.jsx';
import loggedInLinks from '../assets/loggedInLinks.json';
import loggedOutLinks from '../assets/loggedOutLinks.json';


function Header({ loggedIn }) {

  return (
    <>
      <header>
        <MontologyLogo />

        {!loggedIn ? (
          <NavigationBridge links = {loggedInLinks.links}/>
        ) : (
          <NavigationBridge links = {loggedOutLinks.links}/>
        )
        }
      </header>
    </>
  );
}

export default Header;
// Header.jsx

import React from 'react';
import MontologyLogo from '../assets/MontologyLogo.jsx';
import NavigationBridge from './NavigationBridge.jsx';
import loggedInLinks from '../assets/loggedInLinks.json';
import loggedOutLinks from '../assets/loggedOutLinks.json';


function Header({ loggedIn }) {

  return (
    <>
      <header>
        <MontologyLogo />

        {!loggedIn ? (
          <NavigationBridge links = {loggedOutLinks.links}/>
        ) : (
          <NavigationBridge links = {loggedInLinks.links}/>
        )
        }
      </header>
    </>
  );
}

export default Header;
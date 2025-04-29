// Header.jsx

import React from 'react';
import MontologyLogo from '../assets/Brand/MontologyLogo.jsx';
import NavigationBridge from './NavigationBridge.jsx';
import loggedInLinks from '../assets/Navigation/loggedInLinks.json';
import loggedOutLinks from '../assets/Navigation/loggedOutLinks.json';


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
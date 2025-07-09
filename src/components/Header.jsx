// Header.jsx

import React from 'react';
import MontologyLogo from '../assets/Brand/MontologyLogo.jsx';

import NavigationBridge from '../navigation/NavigationBridge.jsx';

import loggedInLinks from '../navigation/loggedInLinks.json';
import loggedOutLinks from '../navigation/loggedOutLinks.json';

function Header({ isAuthenticated, setIsAuthenticated}) {

  return (
    <>
      <header>
        <MontologyLogo />
        {isAuthenticated ? (
          <NavigationBridge links = {loggedInLinks.links}/>
        ) : (
          <NavigationBridge links = {loggedOutLinks.links}/>
        )}
      </header>
    </>
  );
}

export default Header;
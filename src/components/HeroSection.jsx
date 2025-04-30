// HeroSection.jsx

import React from 'react';
import MontologyLogo from '../assets/Brand/MontologyLogo.jsx';

import NavigationBridge from '../Navigation/NavigationBridge.jsx';

import loggedInLinks from '../Navigation/loggedInLinks.json';
import loggedOutLinks from '../Navigation/loggedOutLinks.json';


function HeroSection({ isAuthenticated, setIsAuthenticated}) {

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

export default HeroSection;
// HeroSection.jsx

import React from 'react';
import MontologyLogo from '../assets/Brand/MontologyLogo.jsx';
import AuthChecker from '../AWS/aws-authChecker.jsx';

import NavigationBridge from './heroSection/NavigationBridge.jsx';

import loggedInLinks from '../assets/Navigation/loggedInLinks.json';
import loggedOutLinks from '../assets/Navigation/loggedOutLinks.json';


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
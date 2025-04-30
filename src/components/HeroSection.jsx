// HeroSection.jsx

import React from 'react';
import MontologyLogo from '../assets/Brand/MontologyLogo.jsx';
import AuthChecker from '../AWS/aws-authChecker.jsx';

import NavigationBridge from './NavigationBridge.jsx';

import loggedInLinks from '../assets/Navigation/loggedInLinks.json';
import loggedOutLinks from '../assets/Navigation/loggedOutLinks.json';


function HeroSection() {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

  return (
    <>
      <header>
        <MontologyLogo />
        <AuthChecker setAuthState={setIsAuthenticated} />
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
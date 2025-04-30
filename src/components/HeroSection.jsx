// HeroSection.jsx

import React from 'react';
import MontologyLogo from '../assets/Brand/MontologyLogo.jsx';
import NavigationBridge from './NavigationBridge.jsx';
import loggedInLinks from '../assets/Navigation/loggedInLinks.json';
import loggedOutLinks from '../assets/Navigation/loggedOutLinks.json';


function HeroSection() {

  return (
    <>
      <header>
        <MontologyLogo />
        <NavigationBridge links = {loggedOutLinks.links}/>
        {/* <NavigationBridge links = {loggedInLinks.links}/> */}
      </header>
    </>
  );
}

export default HeroSection;
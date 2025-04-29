// Footer.jsx

import React from 'react';
import config from '../assets/company.json';
import boilerplate from '../assets/boilerplate.json';
import NavigationBridge from './NavigationBridge.jsx';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div>
          {currentYear} &copy; {config.registeredName}. All rights reserved. {config.DBA} and the {config.DBA} logo are trademarks of {config.registeredName}
        </div>
        <div>
          <NavigationBridge links = {boilerplate.links}/>
        </div>
      </footer>
    </>
  );
}

export default Footer;
import React from 'react';
import config from '../../company.json';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        {currentYear} &copy; {config.registeredName}. All rights reserved. {config.DBA} and the {config.DBA} logo are trademarks of {config.registeredName}
      </footer>
    </>
  );
}

export default Footer;
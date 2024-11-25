import React from 'react';
import config from '../../company.json';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        {currentYear} &copy; {config.registeredName}. All rights reserved. CEO: {config.CEO}
      </footer>
    </>
  );
}

export default Footer;
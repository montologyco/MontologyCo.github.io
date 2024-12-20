import React from 'react';
import config from '../assets/company.json';
import boilerplate from '../assets/boilerplate.json';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div>
          {currentYear} &copy; {config.registeredName}. All rights reserved. {config.DBA} and the {config.DBA} logo are trademarks of {config.registeredName}
        </div>
        <div>
          {boilerplate.links.map((link, index) => (
            <span key={index}>
              <a href={link.url}>{link.name}</a>
              {index < boilerplate.links.length - 1 && ' | '}
            </span>
          ))}
        </div>
      </footer>
    </>
  );
}

export default Footer;
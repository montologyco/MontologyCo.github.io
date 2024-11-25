import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        {currentYear} &copy;
      </footer>
    </>
  );
}

export default Footer;
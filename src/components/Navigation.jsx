import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ links }) {

  return (
    <nav>
      {links.map((link, index) => (
        <span key={index}>
          <Link to={link.url}>{link.name}</Link>
        </span>
      ))}
    </nav>
  );
}


export default Navigation;
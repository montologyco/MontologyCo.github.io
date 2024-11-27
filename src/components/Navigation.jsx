import React from 'react';
import { Link } from 'react-router-dom';
import header from '../assets/header.json';

function Navigation() {

  return (
    <nav>
      {header.links.map((link, index) => (
        <span key={index}>
          <Link to={link.url}>{link.name}</Link>
        </span>
      ))}
    </nav>
  );
}

export default Navigation;
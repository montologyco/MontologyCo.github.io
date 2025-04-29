// Body.jsx

import React from 'react';
import MontologyTagline from '../assets/MontologyTagline.jsx';

function Body({loggedIn}) {
  return (
    <>
      <div id="body">
        {!loggedIn && <MontologyTagline />}
        {loggedIn && <h1>Logged In!</h1>}
      </div>
    </>
  );
}

export default Body;
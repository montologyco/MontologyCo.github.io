import React from 'react';
import MontologyTagline from '../assets/MontologyTagline.jsx';

function Body({loggedIn}) {
  return (
    <>
      <div id="body">
        {loggedIn && <h1>AppPicker</h1>}
        {!loggedIn && <MontologyTagline />}
      </div>
    </>
  );
}

export default Body;
import React from 'react';
import MontologyTagline from '../assets/MontologyTagline.jsx';

function AppPicker({loggedIn}) {
  return (
    <>
      <div id="AppPicker">
        <h1>AppPicker</h1>
        {!loggedIn && <MontologyTagline />}
      </div>
    </>
  );
}

export default AppPicker;
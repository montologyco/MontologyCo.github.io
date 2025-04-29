import React from 'react';
import MontologyTagline from '../assets/MontologyTagline.jsx';
import HelloFetch from '../fetch/helloFetch.jsx';

function Body({loggedIn}) {
  return (
    <>
      <div id="body">
        {HelloFetch}

        {/* {loggedIn && <h1>AppPicker</h1>}
        {!loggedIn && <MontologyTagline />} */}
      </div>
    </>
  );
}

export default Body;
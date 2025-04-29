import React, { useEffect } from 'react';
import MontologyTagline from '../assets/MontologyTagline.jsx';

function Body({ loggedIn }) {
  useEffect(() => {
    fetch("https://abc123xyz.execute-api.us-east-1.amazonaws.com/hello")
      .then(res => res.json())
      .then(data => {
        console.log(data); // Should log: { message: "Hi, I'm a server" }
      })
      .catch(err => console.error("API error:", err));
  }, []);

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
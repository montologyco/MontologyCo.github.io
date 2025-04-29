// Login.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({ loggedIn }) {
  const [showInput, setShowInput] = useState(false);

  return (
    <div id="login">
      <h1>Welcome to Montology!</h1>
      <p>Montology is a platform for sharing and discovering knowledge.</p>
      <p>To get started, please log in or create an account.</p>
      <p>Already have an account? <Link to="/login">Log In</Link></p>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
      <p>Need help? <Link to="/help">Help</Link></p>

      {/* {!loggedIn ? (
        <div>
          <Link onClick={() => setShowInput(!showInput)}>Log In</Link>
          {showInput && (
            <div>
              <p>Username: <input type="text" placeholder="Username" /></p>
              <p>Password: <input type="password" placeholder="Password" /></p>
            </div>
          )}
        </div>
      ) : (
        <div>
          <Link>Log Out</Link>
        </div>
      )} */}
    </div>
  );
}

export default Login;
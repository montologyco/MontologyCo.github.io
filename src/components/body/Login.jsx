// Login.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({ loggedIn }) {
  const [showInput, setShowInput] = useState(false);

  return (
    <div>
    {!loggedIn ? (
      <div>
        <div id="login">
          <h1>Log in:</h1>
          <p>Username: <input type="text" placeholder="Username" /></p>
          <p>Password: <input type="password" placeholder="Password" /></p>
        </div>
        <div id="login-buttons">
          <p>Don't have an account? <Link to="/help">Help</Link></p>
          <p>Need help? <Link to="/help">Help</Link></p>
        </div>
      </div>
    ) : (
      <div>
        <p>what</p>
      </div>
    )}
    </div>
  );
}

export default Login;
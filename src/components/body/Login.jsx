// Login.jsx

import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

function Login({ loggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (loggedIn) return <Navigate to="/dashboard" />;

  const isFilled = username !== '' && password !== '';

  return (
    <>
      <div id="login">
        <h1>Log in:</h1>
        <p>
          Username: 
          <input 
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          Password: 
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
      </div>

      <div>
        {isFilled && <button>Log In</button>}
      </div>

      <div id="login-FAQ">
        <p>Don't have an account? <Link to="/FAQ">FAQ</Link></p>
        <p>Need help? <Link to="/contact">Contact</Link></p>
      </div>
    </>
  );
}

export default Login;
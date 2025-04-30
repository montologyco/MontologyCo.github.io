import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

function Login({ loggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Redirect to dashboard if logged in
  if (loggedIn) return <Navigate to="/dashboard" />;

  const isFilled = username !== '' && password !== '';

  const handleLogin = () => {
    // Simple log for login success
    console.log('Login attempt with username:', username);
    // Simulate successful login
    console.log('Logged in successfully!');
  };

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
        {isFilled && <button onClick={handleLogin}>Log In</button>}
      </div>

      <div id="login-FAQ">
        <p>Don't have an account? <Link to="/FAQ">FAQ</Link></p>
        <p>Need help? <Link to="/contact">Contact</Link></p>
      </div>
    </>
  );
}

export default Login;

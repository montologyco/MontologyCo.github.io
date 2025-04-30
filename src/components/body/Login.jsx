import React, { useState } from 'react';
import { useAuth } from 'react-oidc-context'; // Import the useAuth hook
import { Navigate } from 'react-router-dom';

function Login() {
  const { signinRedirect, isAuthenticated, user, error } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (isAuthenticated) return <Navigate to="/dashboard" />; // Redirect to dashboard if already authenticated

  const isFilled = username !== '' && password !== '';

  const handleLogin = () => {
    // Trigger OIDC authentication (redirect to Cognito hosted login page)
    signinRedirect();
  };

  return (
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

      <div>
        {isFilled && <button onClick={handleLogin}>Log In</button>}
      </div>

      <div id="login-FAQ">
        <p>Don't have an account? <a href="/FAQ">FAQ</a></p>
        <p>Need help? <a href="/contact">Contact</a></p>
      </div>

      {error && <p>{error.message}</p>} {/* Handle error if authentication fails */}
    </div>
  );
}

export default Login;
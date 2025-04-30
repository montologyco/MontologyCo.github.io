import React, { useState } from 'react';
import { useAuth } from 'react-oidc-context'; // Import the useAuth hook
import { Navigate } from 'react-router-dom';

function Login() {
  const { signinRedirect, isAuthenticated, user, error } = useAuth(); // Get authentication methods and state
  const [username, setUsername] = useState(''); // State for username input
  const [password, setPassword] = useState(''); // State for password input

  // If the user is already authenticated, redirect them to the dashboard
  if (isAuthenticated) return <Navigate to="/dashboard" />;

  // Check if both fields are filled before allowing login
  const isFilled = username !== '' && password !== '';

  // Handle login - this triggers the Cognito authentication flow
  const handleLogin = () => {
    console.log('Login attempt:', { username, password }); // You can log these for debugging purposes
    signinRedirect(); // Start the OIDC authentication flow (this will redirect to Cognito login page)
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
          onChange={(e) => setUsername(e.target.value)} // Update state on input change
        />
      </p>
      <p>
        Password:
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update state on input change
        />
      </p>

      <div>
        {/* Only show the login button if both username and password are filled */}
        {isFilled && <button onClick={handleLogin}>Log In</button>}
      </div>

      <div id="login-FAQ">
        <p>Don't have an account? <a href="/FAQ">FAQ</a></p>
        <p>Need help? <a href="/contact">Contact</a></p>
      </div>

      {/* Display error message if authentication fails */}
      {error && <p>{error.message}</p>}
    </div>
  );
}

export default Login;

import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { signIn } from '@aws-amplify';  // Importing signIn directly

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);  // For capturing errors
  const [loading, setLoading] = useState(false);  // For showing loading state

  const isFilled = username !== '' && password !== '';

  // Redirect logic if user is already logged in
  const [loggedIn, setLoggedIn] = useState(false);
  if (loggedIn) return <Navigate to="/dashboard" />;

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);  // Show loading state

    try {
      // Attempt to log in using AWS Amplify signIn
      const user = await signIn(username, password);
      console.log('Login successful:', user);
      setLoggedIn(true);  // Update the loggedIn state on success
    } catch (err) {
      setError(err.message);  // Set error message if authentication fails
      console.error('Login error:', err);
    } finally {
      setLoading(false);  // Hide loading state after attempt
    }
  };

  return (
    <>
      <div id="login">
        <h1>Log in:</h1>
        <form onSubmit={handleLogin}>
          <p>
            Username: 
            <input 
              type="text" 
              placeholder="Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </p>
          <p>
            Password: 
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </p>
          <div>
            <button type="submit" disabled={!isFilled || loading}>
              {loading ? 'Logging In...' : 'Log In'}
            </button>
          </div>
        </form>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Show error message if any */}

      <div id="login-FAQ">
        <p>Don't have an account? <Link to="/FAQ">FAQ</Link></p>
        <p>Need help? <Link to="/contact">Contact</Link></p>
      </div>
    </>
  );
}

export default Login;

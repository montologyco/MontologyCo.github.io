// Login.jsx

import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { signIn } from '@aws-amplify/auth';

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false); // Track redirect state

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      setLoading(true);
      setRedirect(false);
      const user = await signIn({ username, password });
      // console.log('Login successful:', user);
    } catch (err) {
      setError(err.message);
      console.error('Login error:', err);
    } finally {
      setLoading(false);
      setRedirect(true);
      setIsAuthenticated(true);
    }
  };

  if (redirect) {
    console.log('Redirecting to dashboard...');
    return <Navigate to="/dashboard" />; // Redirect to dashboard after successful login
  }

  return (
    <>
      <h1>Log in:</h1>
      <form onSubmit={handleLogin}>
        <p>
          Username:{' '}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </p>
        <p>
          Password:{' '}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </p>
        <button type="submit" disabled={!username || !password || loading}>
          {loading ? 'Logging In...' : 'Log In'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
}

export default Login;
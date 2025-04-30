// Login.jsx

import React, { useState } from 'react';
import { signIn } from '@aws-amplify/auth';

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await signIn({ username, password });
      // console.log('Login successful:', user);
    } catch (err) {
      setError(err.message);
      console.error('Login error:', err);
    } finally {
      setIsAuthenticated(true);
    }
  };

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
        <button type="submit" disabled={!username || !password}>
          {'Log In'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
}

export default Login;
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { signIn } from '@aws-amplify/auth'; // Import signIn method

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // if (loggedIn) return <Navigate to="/dashboard" />; // might not do this

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('Username:', username);
      console.log('Password:', password);
      const user = await signIn(username, password);
      console.log('Login successful:', user);
      setLoggedIn(true);
    } catch (err) {
      setError(err.message);
      console.error('Login error:', err);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <>
      <h1>Log in:</h1>
      <form onSubmit={handleLogin}>
        <p>Username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required /></p>
        <p>Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></p>
        <button type="submit" disabled={!username || !password || loading}>{loading ? 'Logging In...' : 'Log In'}</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
}

export default Login;

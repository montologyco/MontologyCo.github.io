import React from 'react';
import UserLoginFetch from '../LoginFetch/UserLoginFetch';

const LoginButtons = ({ username, password }) => {
  const handleLogin = async () => {
    const response = await UserLoginFetch(username, password);

    if (response) {
      localStorage.setItem('loggedIn', true);
      localStorage.setItem('username', username);
      window.location.reload();
    } else {
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('username');
    }
  };

  return (
    <div>
      <p>
        <button onClick={handleLogin}>Login</button>
      </p>
      <p>
        <button>Google</button>
      </p>
    </div>
  );
};

export default LoginButtons;
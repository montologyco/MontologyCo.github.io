import React from 'react';

const LoginFields = ({username, setUsername, password, setPassword}) => {

  return (
    <div>
      <p>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
    </div>
  );
};

export default LoginFields;
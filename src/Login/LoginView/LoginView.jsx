import React, { useState } from 'react';
import LoginFields from './LoginFields';
import LoginButtons from './LoginButtons';

const LoginView = ({ username, setUsername }) => {
  const [password, setPassword] = useState('');

  return (
    <div>
      <LoginFields
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <LoginButtons
        username={username}
        password={password}
      />
    </div>
  );
};

export default LoginView;
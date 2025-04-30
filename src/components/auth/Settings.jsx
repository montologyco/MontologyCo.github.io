// Settings.jsx

import React from 'react';
import AuthChecker from '../AWS/aws-authChecker.jsx';

function Settings({ setIsAuthenticated }) {
  return (
    <div>
      <AuthChecker setAuthState={setIsAuthenticated} />
      
      <h1>Welcome to Settings</h1>
    </div>
  );
}

export default Settings;

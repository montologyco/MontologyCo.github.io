// Settings.jsx

import React from 'react';
import AuthChecker from '../../server/amplify/aws-amplify-authChecker-API.jsx';

function Settings({ setIsAuthenticated }) {
  return (
    <div>
      <AuthChecker setAuthState={setIsAuthenticated} />
      
      <h1>Welcome to Settings</h1>
    </div>
  );
}

export default Settings;

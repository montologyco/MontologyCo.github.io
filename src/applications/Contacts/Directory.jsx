// Directory.jsx

import React from 'react';
import AuthChecker from '../../server/amplify/aws-amplify-authChecker-API.jsx';

function Directory({ setIsAuthenticated }) {

  return (
    <div>
      <AuthChecker setAuthState={setIsAuthenticated} />
      <h1>Table</h1>
    </div>
  );
}

export default Directory;
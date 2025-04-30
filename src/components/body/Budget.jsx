// Budget.jsx

import React from 'react';
import AuthChecker from '../../AWS/aws-authChecker.jsx';

function Budget({ setIsAuthenticated }) {
  return (
    <div>
      <AuthChecker setAuthState={setIsAuthenticated} />
      <h1>Budget</h1>
    </div>
  );
}

export default Budget;

// Dashboard.jsx

import React from 'react';
import AuthChecker from '../../AWS/aws-authChecker.jsx';

function Dashboard({ setIsAuthenticated }) {
  return (
    <div>
      <AuthChecker setAuthState={setIsAuthenticated} />
      
      <h1>Welcome to the Dashboard</h1>
    </div>
  );
}

export default Dashboard;

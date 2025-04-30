// Dashboard.jsx

import React from 'react';
import AuthChecker from '../../AWS/aws-authChecker.jsx';
import NavigationBridge from '../../Navigation/NavigationBridge.jsx';
import applications from '../../Navigation/applications.json';

function Dashboard({ setIsAuthenticated }) {
  return (
    <div>
      <AuthChecker setAuthState={setIsAuthenticated} />
      
      <h1>Welcome to the Dashboard</h1>
      <NavigationBridge links = {applications.links}/>
    </div>
  );
}

export default Dashboard;

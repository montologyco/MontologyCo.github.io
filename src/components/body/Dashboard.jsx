// Dashboard.jsx

import React from 'react';
import AuthChecker from '../../AWS/aws-authChecker.jsx';
import NavigationBridge from '../../Navigation/NavigationBridge.jsx';
import Applications from '../../Navigation/applications.json';

function Dashboard({ setIsAuthenticated }) {
  return (
    <div>
      <AuthChecker setAuthState={setIsAuthenticated} />
      
      <h1>Welcome to the Dashboard</h1>
      <NavigationBridge links = {Applications.links}/>
    </div>
  );
}

export default Dashboard;

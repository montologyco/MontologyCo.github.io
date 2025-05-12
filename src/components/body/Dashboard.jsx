// Dashboard.jsx

import React from 'react';
import AuthChecker from '../../server/amplify/aws-amplify-authChecker-API.jsx';
import NavigationBridge from '../../navigation/NavigationBridge.jsx';
import applications from '../../navigation/applications.json';

function Dashboard({ setIsAuthenticated }) {
  return (
    <div id="dashboard">
      <AuthChecker setAuthState={setIsAuthenticated} />
      
      <NavigationBridge links = {applications.links}/>
    </div>
  );
}

export default Dashboard;
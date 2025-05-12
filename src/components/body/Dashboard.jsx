// Dashboard.jsx

import React from 'react';
import AuthChecker from '../../server/amplify/aws-amplify-authChecker-API.jsx';
import NavigationBridge from '../../Navigation/NavigationBridge.jsx';
import applications from '../../Navigation/applications.json';

function Dashboard({ setIsAuthenticated }) {
  return (
    <div>
      <AuthChecker setAuthState={setIsAuthenticated} />
      
      <NavigationBridge links = {applications.links}/>
    </div>
  );
}

export default Dashboard;

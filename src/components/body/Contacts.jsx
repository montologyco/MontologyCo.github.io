// Contacts.jsx

import React from 'react';
import AuthChecker from '../../AWS/aws-authChecker.jsx';
import NavigationBridge from '../../Navigation/NavigationBridge.jsx';
import applications from '../../Navigation/applications.json';

function Contacts({ setIsAuthenticated }) {
  return (
    <div>
      <AuthChecker setAuthState={setIsAuthenticated} />
      
      <NavigationBridge links = {applications.links}/>
    </div>
  );
}

export default Contacts;

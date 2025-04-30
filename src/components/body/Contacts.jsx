// Contacts.jsx

import React from 'react';
import AuthChecker from '../../AWS/aws-authChecker.jsx';

function Contacts({ setIsAuthenticated }) {
  return (
    <div>
      <AuthChecker setAuthState={setIsAuthenticated} />
      <h1>Contacts</h1>
    </div>
  );
}

export default Contacts;

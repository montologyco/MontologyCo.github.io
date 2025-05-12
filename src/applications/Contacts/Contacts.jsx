// Contacts.jsx

import React from 'react';
import AuthChecker from '../../server/amplify/aws-amplify-authChecker-API.jsx';
import TableShell from '../../shells/TableShell/TableShell.jsx';

function Contacts({ setIsAuthenticated }) {
  return (
    <div>
      <AuthChecker setAuthState={setIsAuthenticated} />
      <h1>Contacts</h1>
      <TableShell PK="Contact" />
    </div>
  );
}

export default Contacts;
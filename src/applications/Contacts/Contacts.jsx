// Contacts.jsx

import React from 'react';
import AuthChecker from '../../server/amplify/aws-amplify-authChecker-API.jsx';
import TableShell from '../../shells/TableShell/TableShell.jsx';

function Contacts({ setIsAuthenticated }) {
  const directory = [
    { PK: 'contact1234', SK: 'name', honorific: 'Mr.', first: 'John', last: 'Doe', middle: 'A', pn: 'M.D.' },
    { PK: 'contact5678', SK: 'name', honorific: 'Ms.', first: 'Jane', last: 'Smith', middle: 'B', pn: '' }
  ];

  return (
    <div>
      <AuthChecker setAuthState={setIsAuthenticated} />
      <h1>Contacts</h1>
      <TableShell directory={directory} />
    </div>
  );
}

export default Contacts;
// Contacts.jsx

import React from 'react';
import AuthChecker from '../../server/amplify/aws-amplify-authChecker-API.jsx';
import TableShell from '../../shells/TableShell/TableShell.jsx';

function Contacts({ setIsAuthenticated }) {
  const directory = [
    { PK: 'contact1234', SK: 'name', first: 'John', last: 'Doe', middle: 'A', pn: 'Mr.', pronouns: 'he/him' },
    { PK: 'contact5678', SK: 'name', first: 'Jane', last: 'Smith', middle: 'B', pn: 'Ms.', pronouns: 'she/her' }
  ];

  return (
    <div>
      <AuthChecker setAuthState={setIsAuthenticated} />
      <h1>Contacts</h1>
      <TableShell directory={ directory } />
    </div>
  );
}

export default Contacts;
// Contacts.jsx

import React, { useState } from 'react';
import AuthChecker from '../../server/amplify/aws-amplify-authChecker-API.jsx';
import TableShell from '../../shells/TableShell/TableShell.jsx';

function Contacts({ setIsAuthenticated }) {
  const [query, setQuery] = useState('');

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  const directory = [
    { PK: 'contact1234', SK: 'name', honorific: 'Mr.', first: 'John', last: 'Doe', middle: 'A', pn: 'M.D.' },
    { PK: 'contact5678', SK: 'name', honorific: 'Ms.', first: 'Jane', last: 'Smith', middle: 'B', pn: '' }
  ];

  return (
    <div>
      <AuthChecker setAuthState={setIsAuthenticated} />
      <h1>Contacts</h1>
      <TableShell directory={directory} query={query} handleSearch={handleSearch} />
    </div>
  );
}

export default Contacts;

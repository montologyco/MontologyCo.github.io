// Directory.jsx

import React from 'react';
import AuthChecker from '../../server/amplify/aws-amplify-authChecker-API.jsx';
import TableShell from '../../shells/TableShell.jsx';

function Directory({ setIsAuthenticated }) {

  return (
    <div>
      <AuthChecker setAuthState={setIsAuthenticated} />
      
      <TableShell />
    </div>
  );
}

export default Directory;
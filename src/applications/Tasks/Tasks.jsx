// Tasks.jsx

import React from 'react';
import AuthChecker from '../../server/amplify/aws-amplify-authChecker-API.jsx';
import TableShell from '../../shells/TableShell/TableShell.jsx';

function Tasks({ setIsAuthenticated }) {
  return (
    <div>
      <AuthChecker setAuthState={setIsAuthenticated} />
      <h1>Tasks</h1>
      <TableShell name="Tasks" />
    </div>
  );
}

export default Tasks;
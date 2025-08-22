// Tasks.jsx

import React from 'react';
import AuthChecker from '../../server/amplify/aws-amplify-authChecker-API.jsx';
import TableTemplate from '../../shells/TableTemplate/TableTemplate.jsx';

function Tasks({ setIsAuthenticated }) {
  return (
    <div>
      <AuthChecker setAuthState={setIsAuthenticated} />
      <h1>Tasks</h1>
      <TableTemplate name="Tasks" />
    </div>
  );
}

export default Tasks;
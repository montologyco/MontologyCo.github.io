// Contacts.jsx

import { useState } from 'react';
import AuthChecker from '../../server/amplify/aws-amplify-authChecker-API.jsx';
import TableTemplate from '../../templates/TableTemplate/TableTemplate.jsx';
import UploadTemplate from '../../templates/UploadTemplate/UploadTemplate.jsx';

function Contacts({ setIsAuthenticated }) {
  const [showUpload, setShowUpload] = useState(false);

  return (
    <div>
      <AuthChecker setAuthState={setIsAuthenticated} />
      <h1>
        Contacts{' '}
        <button onClick={() => setShowUpload(prev => !prev)}>
          {showUpload ? 'View Table' : 'Upload Data'}
        </button>
      </h1>

      {showUpload ? (
        <UploadTemplate setIsAuthenticated={setIsAuthenticated} application="Contacts" />
      ) : (
        <TableTemplate setIsAuthenticated={setIsAuthenticated} application="Contacts" />
      )}
    </div>
  );
}

export default Contacts;
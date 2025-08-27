// Contacts.jsx

import React, { useState, Suspense } from 'react';
import AuthChecker from '../../server/amplify/aws-amplify-authChecker-API.jsx';
import TableTemplate from '../../templates/TableTemplate/TableTemplate.jsx';
const UploadTemplate = React.lazy(() => import('../../templates/UploadTemplate/UploadTemplate.jsx'));

function Contacts({ setIsAuthenticated }) {
  const [view, setView] = useState('table');
  const [uploadTriggered, setUploadTriggered] = useState(false);

  const handleUploadClick = () => {
    setUploadTriggered(true);
    setView('upload');
  };

  const handleHeaderClick = () => {
    if (uploadTriggered) setView('table');
  };

  return (
    <div>
      <AuthChecker setAuthState={setIsAuthenticated} />

      <h1>hello</h1>
      <h1
        onClick={handleHeaderClick}
        style={{ cursor: uploadTriggered ? 'pointer' : 'default', display: 'inline-block' }}
      >
        Contacts
      </h1>

      {!uploadTriggered && (
        <button onClick={handleUploadClick} style={{ marginLeft: '1rem' }}>
          Upload
        </button>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        {view === 'upload' ? (
          <UploadTemplate setIsAuthenticated={setIsAuthenticated} application="Contacts" />
        ) : (
          <TableTemplate setIsAuthenticated={setIsAuthenticated} application="Contacts" />
        )}
      </Suspense>
    </div>
  );
}

export default Contacts;

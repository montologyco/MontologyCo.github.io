// TableShell-Profile.jsx

import React, { useEffect, useState } from 'react';
import AuthChecker from '../../server/amplify/aws-amplify-authChecker-API.jsx';
import getItem from '../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-getItem-API.jsx'; // Adjust path if necessary

function TableShellProfile({ setIsAuthenticated }) {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const PK = 'contact1234';
      const SK = 'name';

      try {
        const item = await getItem(PK, SK);
        if (item) {
          setContact(item);
        } else {
          setError('No item found for the given PK and SK');
        }
      } catch (err) {
        setError('Error fetching data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="tableShell-profile">
      <AuthChecker setAuthState={setIsAuthenticated} />
      <h1>Profile</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {contact && (
        <div>
          <h2>{contact.honorific} {contact.first} {contact.middle} {contact.last} {contact.pn}</h2>
          <p>Pronouns: {contact.pronouns}</p>
        </div>
      )}
    </div>
  );
}

export default TableShellProfile;
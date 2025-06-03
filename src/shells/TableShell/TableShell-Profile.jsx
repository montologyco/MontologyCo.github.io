// TableShell-Profile.jsx

import React, { useEffect, useState } from 'react';
import AuthChecker from '../../server/amplify/aws-amplify-authChecker-API.jsx';
import getItem from '../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-getItem-API.jsx';

function TableShellProfile({ directoryitem, setIsAuthenticated }) {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!directoryitem) return;

    const fetchData = async () => {
      const { PK, SK } = directoryitem;

      setLoading(true);
      setError(null);

      try {
        const item = await getItem(PK, SK);
        if (item) {
          setContact(item);
        } else {
          setContact(null);
          setError('No item found for the given PK and SK');
        }
      } catch (err) {
        setContact(null);
        setError('Error fetching data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [directoryitem]);

  return (
    <div className="tableShell-profile">
      <AuthChecker setAuthState={setIsAuthenticated} />
      <h1>Profile</h1>

      {!directoryitem && <p>Select a contact to view their profile.</p>}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {contact && (
        <div>
          <h2>
            {contact.honorific} {contact.first} {contact.middle} {contact.last} {contact.pn}
          </h2>
          {contact.pronouns && <p>Pronouns: {contact.pronouns}</p>}
        </div>
      )}
    </div>
  );
}

export default TableShellProfile;
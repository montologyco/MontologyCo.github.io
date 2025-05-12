// TableShell-Profile.jsx

import React, { useEffect, useState } from 'react';
import AuthChecker from '../../server/amplify/aws-amplify-authChecker-API.jsx';
import getItem from '../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-getItem-API.jsx'; // Adjust path if necessary

function Profile({ setIsAuthenticated }) {
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
    <div>
      <AuthChecker setAuthState={setIsAuthenticated} />
      <h1>{contact.honorific} {contact.first} {contact.middle} {contact.last}, {contact.pn}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}</h1>
      {contact && (
        <div>
          <h2>Pronouns: {contact.pronouns}</h2>
        </div>
      )}
    </div>
  );
}

export default Profile;
// ProfileShell.jsx

import React, { useEffect, useState } from 'react';
import AuthChecker from '../../../server/amplify/aws-amplify-authChecker-API.jsx';
import getItem from '../../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-getItem-API.jsx';

function ProfileShell({ directoryitem, SKs = [], setIsAuthenticated = () => {} }) {
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

  const getHeaderFields = () => {
    if (!directoryitem?.SK || !SKs.length) return [];
    const skPrefix = directoryitem.SK.match(/^[a-zA-Z]+/)?.[0];
    const skEntry = SKs.find(entry => entry.SK === skPrefix);
    return skEntry?.SKheading || [];
  };

  const getSections = () => {
    if (!directoryitem?.SK || !SKs.length) return [];
    const skPrefix = directoryitem.SK.match(/^[a-zA-Z]+/)?.[0];
    const skEntry = SKs.find(entry => entry.SK === skPrefix);
    return skEntry?.SKsections || [];
  };

  return (
    <div className="tableShell-profile">
      <AuthChecker setAuthState={setIsAuthenticated} />
      {!directoryitem && <p>Select a contact to view their profile.</p>}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {contact && (
        <div>
          <h2>
            {[...getHeaderFields().map(f => contact[f])]
              .filter(Boolean)
              .join(' ')}
          </h2>

          {contact.pronouns && <p>Pronouns: {contact.pronouns}</p>}

          <div className="profile-sections">
            {getSections().map(section => (
              <div key={section} className="profile-section-placeholder">
                <h3>{section}</h3>
                <p>(Section placeholder)</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileShell;
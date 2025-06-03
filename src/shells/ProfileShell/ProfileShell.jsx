// ProfileShell.jsx

import React, { useEffect, useState } from 'react';
import AuthChecker from '../../server/amplify/aws-amplify-authChecker-API.jsx';
import getItem from '../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-getItem-API.jsx';
import ProfileShellSections from './ProfileShellSections.jsx';

function ProfileShell({ directoryitem, SKs = [], setIsAuthenticated = () => {} }) {
  const [item, setItem] = useState(null);
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
        setItem(item || null);
        if (!item) setError('No item found for the given PK and SK');
      } catch (err) {
        console.error(err);
        setError('Error fetching data');
        setItem(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [directoryitem]);

  const getSKheadings = () => {
    const skPrefix = directoryitem?.SK?.match(/^[a-zA-Z]+/)?.[0];
    return SKs.find(entry => entry.SK === skPrefix)?.SKheading || [];
  };

  const getSKsubheadings = () => {
    const skPrefix = directoryitem?.SK?.match(/^[a-zA-Z]+/)?.[0];
    return SKs.find(entry => entry.SK === skPrefix)?.SKsubheading || [];
  };

  const getSKsections = () => {
    const skPrefix = directoryitem?.SK?.match(/^[a-zA-Z]+/)?.[0];
    return SKs.find(entry => entry.SK === skPrefix)?.SKsections || [];
  };

  return (
    <div className="tableShell-profile">
      <AuthChecker setAuthState={setIsAuthenticated} />
      {!directoryitem && <p>Select a item to view their profile.</p>}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {item && (
        <div>
          <h2>
            {getSKheadings().map(f => item[f]).filter(Boolean).join(' ')}
          </h2>
          <h3>
            {getSKsubheadings().map(f => item[f]).filter(Boolean).join(' ')}
          </h3>
          <ProfileShellSections item={item} sections={getSKsections()} />
        </div>
      )}
    </div>
  );
}

export default ProfileShell;
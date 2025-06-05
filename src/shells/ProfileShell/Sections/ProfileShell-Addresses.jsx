// ProfileShell-Addresses.jsx

import { useEffect, useState } from 'react';
import getOwnedItems from '../../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-getOwnedItems-API.jsx';

const ProfileShellAddresses = ({ SK }) => {
  const [phones, setAddresses] = useState([]);

  useEffect(() => {
    const fetchAddresses = async () => {
      const results = await getOwnedItems('phone', SK);
      console.log('Addresses fetched:', results); // <–– add this
      setAddresses(results);
    };
    fetchAddresses();
  }, [SK]);

  return (
    <div className="profile-phones">
      <h3>Addresses</h3>
      {phones.map(phone => (
        <div key={phone.SK}>
          <p>{phone.SK} ({phone.type})</p>
        </div>
      ))}
      {phones.length === 0 && <p>No phones linked.</p>}
    </div>
  );
};

export default ProfileShellAddresses;
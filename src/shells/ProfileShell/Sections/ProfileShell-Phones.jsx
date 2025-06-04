// ProfileShell-Phones.jsx

import { useEffect, useState } from 'react';
import getOwnedItems from '../../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-getOwnedItems-API.jsx';

const ProfileShellPhones = ({ SK }) => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const fetchPhones = async () => {
      const results = await getOwnedItems('phone', SK);
      console.log('Phones fetched:', results); // <–– add this
      setPhones(results);
    };
    fetchPhones();
  }, [SK]);

  return (
    <div className="profile-phones">
      <h3>Phones</h3>
      {phones.map(phone => (
        <div key={phone.SK}>
          <p>{phone.SK} ({phone.type})</p>
        </div>
      ))}
      {phones.length === 0 && <p>No phones linked.</p>}
    </div>
  );
};

export default ProfileShellPhones;
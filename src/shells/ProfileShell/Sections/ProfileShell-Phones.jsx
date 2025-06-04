// ProfileShell-Phones.jsx

import { useEffect, useState } from 'react';
import getItem from '../../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-getItem-API.jsx';

const ProfileShellPhones = ({ SK }) => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const fetchPhones = async () => {
      const allPhones = await getItem('phone');
      const filtered = allPhones.filter(p =>
        p.owners?.split(',').includes(SK)
      );
      setPhones(filtered);
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
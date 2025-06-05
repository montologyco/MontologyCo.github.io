// ProfileShell-Addresses.jsx

import { useEffect, useState } from 'react';
import getItem from '../../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-getItem-API.jsx';

const ProfileShellAddresses = ({ item }) => {
  const addressSet = item.addresses;
  const addressSKs = Array.isArray(item.addresses?.values) ? addressSet.values : [];
  const [addressData, setAddressData] = useState([]);

  useEffect(() => {
    const fetchAddresses = async () => {
      const results = await Promise.all(
        addressSKs.map(sk => getItem('address', sk))
      );
      setAddressData(results.filter(Boolean)); // remove nulls if any lookup fails
    };

    if (addressSKs.length > 0) {
      fetchAddresses();
    }
  }, [addressSKs]);

  return (
    <div className="profile-addresses">
      <h3>Addresses</h3>
      {addressData.map(address => (
        <div key={address.SK}>
          <p>{address.street} {address.city}, {address.zip}</p>
        </div>
      ))}
      {addressData.length === 0 && <p>No addresses linked.</p>}
    </div>
  );
};

export default ProfileShellAddresses;
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
        addressSKs.map(async (homeSK) => {
          const address = await getItem('address', homeSK); // e.g., home0001
          if (!address || !address.street) return null;

          const streetDetails = await getItem('address', address.street); // e.g., street0001
          const stateDetails = await getItem('address', address.state);   // e.g., state0040

          return {
            ...address,
            ...streetDetails,
            st: stateDetails?.st || '',           // state abbreviation
            stateFull: stateDetails?.state || ''  // full state name
          };
        })
      );
      setAddressData(results.filter(Boolean));
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
          <p>{address.number} {address.street} {address.city}, {address.st} {address.zip}</p>
        </div>
      ))}
      {addressData.length === 0 && <p>No addresses linked.</p>}
    </div>
  );
};

export default ProfileShellAddresses;
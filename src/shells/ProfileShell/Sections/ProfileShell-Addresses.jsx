// ProfileShell-Addresses.jsx

import { useEffect, useState } from 'react';
import getItem from '../../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-getItem-API.jsx';

const ProfileShellAddresses = ({ item }) => {
  const addressSet = item.addresses;
  const addressSKs = Array.isArray(addressSet?.values) ? addressSet.values : [];
  const [addressData, setAddressData] = useState([]);

  useEffect(() => {
    setAddressData([]);

    const fetchAddresses = async () => {
      const results = await Promise.all(
        addressSKs.map(async (homeSK) => {
          const address = await getItem('address', homeSK); // SK home0001
          if (!address || !address.street) return null; //empty test

          const streetDetails = await getItem('address', address.street); // SK street0001, GET street, city, zip, state0040
          if (!streetDetails || !streetDetails.state) return null; //empty test
          const stateDetails = await getItem('address', streetDetails.state);   // SK state0040, GET state/st
          if (!stateDetails || !stateDetails.state) return null; //empty test
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
  }, [addressSKs, item]);

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
// ProfileShell-Addresses.jsx

import { useEffect, useState } from 'react';
import getItem from '../../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-getItem-API.jsx';

const ProfileShellAddresses = ({ item }) => {
  const addressSet = item.addresses;
  const addressSKs = Array.isArray(addressSet?.values) ? addressSet.values : [];
  const [addressData, setAddressData] = useState([]);

  useEffect(() => {
    setAddressData([]); // Clear on re-run

    const fetchAddresses = async () => {
      const results = await Promise.all(
        addressSKs.map(async (addressSK) => {
          const address = await getItem('address', addressSK);
          if (!address?.street) return null;

          const streetDetails = await getItem('address', address.street);
          if (!streetDetails?.state) return null;

          const cityDetails = await getItem('address', streetDetails.city);
          if (!cityDetails?.state) return null;

          const stateDetails = await getItem('address', cityDetails.state);
          if (!stateDetails?.state) return null;

          return {
            ...address,
            ...streetDetails,
            st: stateDetails.st || '',
            stateFull: stateDetails.state || '',
            city: cityDetails.city || '',
            zip: cityDetails.zip || '',
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
      {addressData.length > 0 ? (
        addressData.map((address) => (
          <div key={address.SK}>
            <p>
              {address.number} {address.street} {address.city}, {address.st} {address.zip}
            </p>
          </div>
        ))
      ) : (
        <p>No addresses linked.</p>
      )}
    </div>
  );
};

export default ProfileShellAddresses;
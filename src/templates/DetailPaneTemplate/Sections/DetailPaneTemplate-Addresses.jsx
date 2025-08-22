// DetailPaneTemplate-Addresses.jsx

import { useEffect, useState } from 'react';
import getItem from '../../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-getItem-API.jsx';

const DetailPaneTemplateAddresses = ({ item }) => {
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
          const streetDetails = await getItem('address', address.street); // SK street0001, GET street, city0001
          if (!streetDetails || !streetDetails.city) return null; //empty test
          const cityDetails = await getItem('address', streetDetails.city); // SK city0001, GET city, state0001, zip
          if (!cityDetails || !cityDetails.state) return null; //empty test
          const stateDetails = await getItem('address', cityDetails.state);   // SK state0040, GET state/st
          if (!stateDetails || !stateDetails.state) return null; //empty test
          return {
            ...address,
            ...streetDetails,
            ...cityDetails,
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

export default DetailPaneTemplateAddresses;
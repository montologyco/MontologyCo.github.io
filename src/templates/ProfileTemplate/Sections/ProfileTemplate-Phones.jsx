// ProfileTemplate-Phones.jsx

import { useEffect, useState } from 'react';
import getItem from '../../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-getItem-API.jsx';

const ProfileTemplatePhones = ({ item }) => {
  const phoneSet = item.phones;
  const phoneSKs = Array.isArray(phoneSet?.values) ? phoneSet.values : [];

  const [phones, setPhones] = useState([]);

  useEffect(() => {
    setPhones([]);

    const fetchPhones = async () => {
      const results = await Promise.all(
        phoneSKs.map(async (phoneSK) => {
          const phoneStr = String(phoneSK);
          try {
            const phoneData = await getItem('phone', phoneStr);
            return {
              raw: phoneStr,
              formatted:
                phoneStr.length === 10
                  ? `(${phoneStr.slice(0, 3)}) ${phoneStr.slice(3, 6)}-${phoneStr.slice(6)}`
                  : phoneStr,
              type: phoneData?.type || 'Unknown',
              error: false,
            };
          } catch (err) {
            console.warn("Phone lookup failed for:", phoneStr, err);
            return {
              raw: phoneStr,
              formatted:
                phoneStr.length === 10
                  ? `(${phoneStr.slice(0, 3)}) ${phoneStr.slice(3, 6)}-${phoneStr.slice(6)}`
                  : phoneStr,
              type: 'Error fetching phone details',
              error: true,
            };
          }
        })
      );

      setPhones(results);
    };

    if (phoneSKs.length > 0) {
      fetchPhones();
    }
  }, [phoneSKs, item]);

  return (
    <div className="profile-phones">
      <h3>Phones</h3>
      {phones.length > 0 ? (
        phones.map((phone) => (
          <div key={phone.raw}>
            <p>
              {phone.formatted} — {phone.type}
            </p>
          </div>
        ))
      ) : (
        <p>No phones linked.</p>
      )}
    </div>
  );
};

export default ProfileTemplatePhones;
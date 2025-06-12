// ProfileShell-Employment.jsx

import { useEffect, useState } from 'react';
import getItem from '../../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-getItem-API.jsx';

const ProfileShellEmployment = ({ item }) => {
  const employmentSet = item.employment;
  const employmentSKs = Array.isArray(employmentSet?.values) ? employmentSet.values : [];
  const [employmentData, setEmploymentData] = useState([]);

  useEffect(() => {
    const fetchEmployment = async () => {
      const results = await Promise.all(
        employmentSKs.map(async (employmentSK) => {
          const employment = await getItem('employment', employmentSK); // SK job0001
          if (!employment || !employment.company) return null; //empty test
        })
      );
      setEmploymentData(results.filter(Boolean));
    };

    if (employmentSKs.length > 0) {
      fetchEmployment();
    }
  }, [employmentSKs]);

  return (
    <div className="profile-employment">
      <h3>Employment</h3>
      {employmentData.map(emp => (
        <div key={employment.SK}>
          <p>{employment.company}</p>
        </div>
      ))}
      {employmentData.length === 0 && <p>No employment linked.</p>}
    </div>
  );
};

export default ProfileShellEmployment;
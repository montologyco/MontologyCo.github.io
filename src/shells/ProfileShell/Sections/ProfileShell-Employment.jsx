// ProfileShell-Employment.jsx

import { useEffect, useState } from 'react';
import getItem from '../../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-getItem-API.jsx';

const ProfileShellEmployment = ({ item }) => {
  const employmentSet = item.employment;
  const employmentSKs = Array.isArray(employmentSet?.values)
    ? employmentSet.values
    : [];

  const [employmentData, setEmploymentData] = useState([]);

  useEffect(() => {
    const fetchEmployment = async () => {
      const results = await Promise.all(
        employmentSKs.map(async (employmentSK) => {
          const employment = await getItem('employment', employmentSK); // PK = 'employment'
          if (!employment || !employment.company) return null;

          const companyDetails = await getItem('contact', employment.company); // PK = 'contact'
          const companyName = companyDetails?.name || employment.company;

          return {
            ...employment,
            companyName,
          };
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
      {employmentData.length > 0 ? (
        employmentData.map((job) => (
          <div key={job.SK}>
            <p>
              {job.position} at {job.companyName}
              {job.startmonth && job.startyear && (
                <> (started {job.startmonth} {job.startyear})</>
              )}
              {job.endday == null && job.endmonth == null && job.endyear == null ? (
                <> — currently employed</>
              ) : (
                job.endmonth && job.endyear && (
                  <> (ended {job.endmonth} {job.endyear})</>
                )
              )}
            </p>
          </div>
        ))
      ) : (
        <p>No employment linked.</p>
      )}
    </div>
  );
};

export default ProfileShellEmployment;
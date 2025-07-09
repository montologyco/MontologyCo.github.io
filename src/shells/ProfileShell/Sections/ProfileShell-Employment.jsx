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
    setEmploymentData([]);
    const fetchEmployment = async () => {

      const results = await Promise.all(
        employmentSKs.map(async (employmentSK) => {
          const employment = await getItem('employment', employmentSK);

          if (!employment) {
            console.warn("  ✖ Skipping due to missing employment");
            return null;
          }

          let companyName = employment.company || "Unknown company";

          if (employment.company) {
            const companyDetails = await getItem('contact', employment.company);
            companyName = companyDetails?.name || companyName;
          }

          return {
            ...employment,
            companyName,
          };
        })
      );

      setEmploymentData(results);
    };

    if (employmentSKs.length > 0) {
      fetchEmployment();
    }
  }, [employmentSKs, item]);

  return (
    <div className="profile-employment">
      <h3>Employment</h3>
      {employmentData.length > 0 ? (
        employmentData.map((job, index) => (
          <div key={job?.SK || `job-${index}`}>
            <p>
              {job?.position || 'Unknown position'} at {job?.companyName || 'Unknown company'}
              {job?.startmonth && job?.startyear && (
                <> (started {job.startmonth} {job.startyear})</>
              )}
              {job?.endday == null && job?.endmonth == null && job?.endyear == null ? (
                <> — currently employed</>
              ) : (
                job?.endmonth && job?.endyear && (
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
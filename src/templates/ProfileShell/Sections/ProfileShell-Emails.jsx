// ProfileShell-Emails.jsx

import { useEffect, useState } from 'react';
import getItem from '../../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-getItem-API.jsx';

const ProfileShellEmails = ({ item }) => {
  const emailSet = item.emails;
  const emailSKs = Array.isArray(emailSet?.values) ? emailSet.values : [];

  const [emails, setEmails] = useState([]);

  useEffect(() => {
    setEmails([]);

    const fetchEmails = async () => {
      const results = await Promise.all(
        emailSKs.map(async (emailSK) => {
          const emailStr = String(emailSK);
          try {
            const emailData = await getItem('email', emailStr);
            return {
              raw: emailStr,
              type: emailData?.type || 'Unknown',
              error: false,
            };
          } catch (err) {
            console.warn("Email lookup failed for:", emailStr, err);
            return {
              raw: emailStr,
              type: 'Error fetching email details',
              error: true,
            };
          }
        })
      );

      setEmails(results);
    };

    if (emailSKs.length > 0) {
      fetchEmails();
    }
  }, [emailSKs, item]);

  return (
    <div className="profile-emails">
      <h3>Emails</h3>
      {emails.length > 0 ? (
        emails.map((email) => (
          <div key={email.raw}>
            <p>
              {email.raw} — {email.type}
            </p>
          </div>
        ))
      ) : (
        <p>No emails linked.</p>
      )}
    </div>
  );
};

export default ProfileShellEmails;
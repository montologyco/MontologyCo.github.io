// ProfileShell-Emails.jsx

const ProfileShellEmails = ({ item }) => {
  const emailSet = item.emails;
  const emailSKs = Array.isArray(emailSet?.values) ? emailSet.values : [];

  return (
    <div className="profile-emails">
      <h3>Emails</h3>
      {emailSKs.length > 0 ? (
        emailSKs.map((email) => {
          const emailStr = String(email);
          const formatted =
            emailStr.length === 10
              ? `(${emailStr.slice(0, 3)}) ${emailStr.slice(3, 6)}-${emailStr.slice(6)}`
              : emailStr;

          return (
            <div key={emailStr}>
              <p>{formatted}</p>
            </div>
          );
        })
      ) : (
        <p>No emails linked.</p>
      )}
    </div>
  );
};

export default ProfileShellEmails;
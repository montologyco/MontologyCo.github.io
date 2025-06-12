// ProfileShell-Phones.jsx

const ProfileShellPhones = ({ item }) => {
  const phoneSet = item.phones;
  const phoneSKs = Array.isArray(phoneSet?.values) ? phoneSet.values : [];

  return (
    <div className="profile-phones">
      <h3>Phones</h3>
      {phoneSKs.length > 0 ? (
        phoneSKs.map((phone) => {
          const phoneStr = String(phone);
          const formatted =
            phoneStr.length === 10
              ? `(${phoneStr.slice(0, 3)}) ${phoneStr.slice(3, 6)}-${phoneStr.slice(6)}`
              : phoneStr;

          return (
            <div key={phoneStr}>
              <p>{formatted}</p>
            </div>
          );
        })
      ) : (
        <p>No phones linked.</p>
      )}
    </div>
  );
};

export default ProfileShellPhones;
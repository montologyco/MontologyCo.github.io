// ProfileShell-Phones.jsx

const ProfileShellPhones = ({ item }) => {
  const phoneSet = item.phones;
  const phoneSKs = Array.isArray(phoneSet?.values) ? phoneSet.values : [];

  return (
    <div className="profile-phones">
      <h3>Phones</h3>
      {phoneSKs.map(phone => (
        <div key={phone}>
          <p>
            {phone.length === 10
              ? `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`
              : phone}
          </p>
        </div>
      ))}
      {phoneSKs.length === 0 && <p>No phones linked.</p>}
    </div>
  );
};

export default ProfileShellPhones;
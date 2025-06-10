// ProfileShell-Phones.jsx

const ProfileShellPhones = ({ item }) => {
  const phoneSet = item.phones;
  const phoneSKs = Array.isArray(item.phones?.values) ? phoneSet.values : [];

  return (
    <div className="profile-phones">
      <h3>Phones</h3>
      {phoneSKs.map(phone => {
        const formatted =
          typeof phone === 'string' && phone.length === 10
            ? `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`
            : phone;

        return (
          <div key={phone}>
            <p>{formatted}</p>
          </div>
        );
      })}
      {phoneSKs.length === 0 && <p>No phones linked.</p>}
    </div>
  );
};

export default ProfileShellPhones;
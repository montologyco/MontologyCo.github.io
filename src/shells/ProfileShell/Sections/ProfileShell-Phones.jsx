// ProfileShell-Phones.jsx

const ProfileShellPhones = ({ item }) => {
  const phoneSKs = Array.isArray(item.SK) ? item.SK : [];
  console.log('ProfileShellPhones', phoneSKs);
  console.log('ProfileShellPhones item', item);
  return (
    <div className="profile-phones">
      <h3>Phones</h3>
      {phoneSKs.map(phone => (
        <div key={phone}>
          <p>{phone}</p>
        </div>
      ))}
      {phoneSKs.length === 0 && <p>No phones linked.</p>}
    </div>
  );
};

export default ProfileShellPhones;
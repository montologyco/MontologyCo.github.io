// ProfileShell-Addresses.jsx

const ProfileShellAddresses = ({ item }) => {
  const addressSKs = Array.isArray(item.addresses) ? item.addresses : [];
  console.log('ProfileShellAddresses', addressSKs);

  return (
    <div className="profile-addresses">
      <h3>Addresses</h3>
    </div>
  );
};

export default ProfileShellAddresses;
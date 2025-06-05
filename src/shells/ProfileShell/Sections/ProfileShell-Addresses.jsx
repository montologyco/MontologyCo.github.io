// ProfileShell-Addresses.jsx

const ProfileShellAddresses = ({ item }) => {
  const addressSKs = Array.isArray(item.addresses) ? item.addresses : [];

  return (
    <div className="profile-addresses">
      <h3>Addresses</h3>
      {addressSKs.map(address => (
        <div key={address}>
          <p>{address}</p>
        </div>
      ))}
      {addressSKs.length === 0 && <p>No addresses linked.</p>}
    </div>
  );
};

export default ProfileShellAddresses;
// ProfileShell-Addresses.jsx

const ProfileShellAddresses = ({ item }) => (
  <div className="profile-addresses">
    <h3>Addresses</h3>
    <pre>{JSON.stringify(item, null, 2)}</pre>
  </div>
);

export default ProfileShellAddresses;
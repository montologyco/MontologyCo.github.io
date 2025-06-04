// ProfileShell-Addresses.jsx

const ProfileShellAddresses = ({ SK }) => (
  <div className="profile-addresses">
    <h3>Addresses</h3>
    <pre>{JSON.stringify(SK, null, 2)}</pre>
  </div>
);

export default ProfileShellAddresses;
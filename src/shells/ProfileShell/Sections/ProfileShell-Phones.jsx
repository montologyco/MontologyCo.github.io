// ProfileShell-Phones.jsx

const ProfileShellPhones = ({ item }) => (
  <div className="profile-phones">
    <h3>Phones</h3>
    <pre>{JSON.stringify(item, null, 2)}</pre>
  </div>
);

export default ProfileShellPhones;
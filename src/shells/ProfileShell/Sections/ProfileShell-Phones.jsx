// ProfileShell-Phones.jsx

const ProfileShellPhones = ({ SK }) => (
  <div className="profile-phones">
    <h3>Phones</h3>
    <pre>{JSON.stringify(SK, null, 2)}</pre>
  </div>
);

export default ProfileShellPhones;
// ProfileShell-Employment.jsx

const ProfileShellEmployment = ({ item }) => {
  const employmentSet = item.employment;
  const employmentSKs = Array.isArray(employmentSet?.values) ? employmentSet.values : [];

  return (
    <div className="profile-employment">
      <h3>Employment</h3>
      {employmentSKs.map(employmentSK => (
        <div key={employmentSK}>
          <p>{employmentSK}</p>
        </div>
      ))}
      {employmentSKs.length === 0 && <p>No employmentSK linked.</p>}
    </div>
  );
};

export default ProfileShellEmployment;
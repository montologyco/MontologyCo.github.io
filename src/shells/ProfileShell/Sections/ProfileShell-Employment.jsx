// ProfileShell-Employment.jsx

const ProfileShellEmployment = ({ item }) => {
  const employmentSet = item.employment;
  const employmentSKs = Array.isArray(employmentSet?.values) ? employmentSet.values : [];

  return (
    <div className="profile-employment">
      <h3>Employment</h3>
      {employmentSKs.length > 0 ? (
        employmentSKs.map((employment) => {
          const employmentStr = String(employment); // ensure string from SK number
          const formatted =
            employmentStr.length === 10
              ? `(${employmentStr.slice(0, 3)}) ${employmentStr.slice(3, 6)}-${employmentStr.slice(6)}`
              : employmentStr;

          return (
            <div key={employmentStr}>
              <p>{formatted}</p>
            </div>
          );
        })
      ) : (
        <p>No employment linked.</p>
      )}
    </div>
  );
};

export default ProfileShellEmployment;
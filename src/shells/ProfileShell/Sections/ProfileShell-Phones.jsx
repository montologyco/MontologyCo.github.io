// ProfileShell-Phones.jsx

const ProfileShellPhones = ({ item }) => {
  const phoneSKs = Array.isArray(item.phones) ? item.phones : [];

  return (
    <div className="profile-phones">
      <h3>Phones</h3>
      {phoneSKs.length > 0 ? (
        phoneSKs.map(phone => {
          const clean = phone.replace(/\D/g, ''); // remove non-digits
          const formatted =
            clean.length === 10
              ? `(${clean.slice(0, 3)}) ${clean.slice(3, 6)}-${clean.slice(6)}`
              : phone;

          return (
            <div key={phone}>
              <p>{formatted}</p>
            </div>
          );
        })
      ) : (
        <p>No phones linked.</p>
      )}
    </div>
  );
};

export default ProfileShellPhones;
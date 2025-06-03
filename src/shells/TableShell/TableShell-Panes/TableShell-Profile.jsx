// TableShell-Profile.jsx

function TableShellProfile({ directoryitem, SKs = [], setIsAuthenticated = () => {} }) {
  return (
    <ProfileShell
      directoryitem={directoryitem}
      SKs={SKs}
      setIsAuthenticated={setIsAuthenticated}
    />
  );
}

export default TableShellProfile;
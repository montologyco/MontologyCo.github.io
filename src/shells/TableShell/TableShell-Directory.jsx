// TableShell-Directory.jsx

const TableShellDirectory = ({ directory, directoryWidth, onSelectItem, SKs = [] }) => {
  const handleItemClick = (directoryitem) => {
    if (onSelectItem) {
      onSelectItem({ PK: directoryitem.PK, SK: directoryitem.SK });
    }
  };

  const getTypeFromSK = (sk) => sk?.split('#')[0]?.toLowerCase();

  const getFieldListForType = (type) => {
    return SKs.find(skObj => skObj.type === type)?.fields || [];
  };

  const stringifyItem = (item) => {
    const type = getTypeFromSK(item.SK);
    const fields = getFieldListForType(type);

    // If field config exists, use it
    if (fields.length) {
      return fields.map(field => item[field]).filter(Boolean).join(' ');
    }

    // fallback: show everything except internal keys
    const fallback = Object.entries(item)
      .filter(([key]) => key !== 'PK' && key !== 'SK' && key !== 'owner')
      .map(([_, value]) => value)
      .filter(Boolean);

    return fallback.join(' ');
  };

  return (
    <div className="tableShell-directory" style={{ width: `${directoryWidth}px` }}>
      <ul>
        {directory.map((directoryitem) => (
          <li key={directoryitem.SK}>
            <a href="#" onClick={(e) => { e.preventDefault(); handleItemClick(directoryitem); }}>
              {stringifyItem(directoryitem)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableShellDirectory;
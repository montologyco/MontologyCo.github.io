// TableTemplate-Directory.jsx

const TableTemplateDirectory = ({ directory, directoryWidth, onSelectItem, SKs = [] }) => {
  const handleItemClick = (directoryitem) => {
    if (onSelectItem) {
      onSelectItem({ PK: directoryitem.PK, SK: directoryitem.SK });
    }
  };

  // Determine the unique column keys from the first object
  const columnKeys = directory.length > 0 ? Object.keys(directory[0]) : [];

  return (
    <div className="tableTemplate-directory" style={{ width: `${directoryWidth}px` }}>
      <table>
        <thead>
          <tr>
            {columnKeys.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {directory.map((item) => (
            <tr key={item.SK || JSON.stringify(item)} onClick={() => handleItemClick(item)} style={{ cursor: 'pointer' }}>
              {columnKeys.map((key) => (
                <td key={key}>{item[key] || ''}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* <ul>
        {directory.map((directoryitem) => (
          <li key={directoryitem.SK}>
            <a href="#" onClick={(e) => { e.preventDefault(); handleItemClick(directoryitem); }}>
              {directoryitem.SK}
            </a>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default TableTemplateDirectory;
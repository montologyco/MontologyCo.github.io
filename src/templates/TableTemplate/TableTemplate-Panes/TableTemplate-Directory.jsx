// TableTemplate-Directory.jsx

const TableTemplateDirectory = ({ directory, directoryWidth, onSelectItem, SKs = [] }) => {
  const handleItemClick = (directoryitem) => {
    if (onSelectItem) {
      onSelectItem({ PK: directoryitem.PK, SK: directoryitem.SK });
    }
  };

  return (
    <div className="tableTemplate-directory" style={{ width: `${directoryWidth}px` }}>
      <table>
        <thead>
          <tr>
            {allKeys.map(key => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {directory.map((item) => (
            <tr key={item.SK} onClick={() => handleItemClick(item)} style={{ cursor: 'pointer' }}>
              {allKeys.map((key) => (
                <td key={key}>{item[key] || ''}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <h3>DELETE</h3>
      <ul>
        {directory.map((directoryitem) => (
          <li key={directoryitem.SK}>
            <a href="#" onClick={(e) => { e.preventDefault(); handleItemClick(directoryitem); }}>
              {directoryitem.SK}
            </a>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default TableTemplateDirectory;
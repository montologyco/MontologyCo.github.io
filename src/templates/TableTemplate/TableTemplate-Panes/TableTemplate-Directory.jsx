// TableTemplate-Directory.jsx

const TableTemplateDirectory = ({ directory, directoryWidth, onSelectItem, SKs = [] }) => {
  const handleItemClick = (directoryitem) => {
    if (onSelectItem) {
      onSelectItem({ PK: directoryitem.PK, SK: directoryitem.SK });
    }
  };

  const getRowLabel = (item) => {
    const skPrefix = item.SK.match(/^[a-zA-Z]+/)?.[0];
    const skConfig = SKs.find(sk => sk.SK === skPrefix);
    const SKheading = skConfig?.SKheading || [];

    const values = SKheading
      .map(key => item[key])
      .filter(Boolean);

    return values.join(' ');
  };

  return (
    <div className="tableTemplate-directory" style={{ width: `${directoryWidth}px`, overflowX: 'auto' }}>
      <table className="directory-table">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {directory.map((item) => (
            <tr key={item.SK} onClick={() => handleItemClick(item)} className="directory-row">
              <td>{getRowLabel(item)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTemplateDirectory;

// TableTemplate-Directory.jsx

const TableTemplateDirectory = ({ directory, directoryWidth, onSelectItem, SKs = [] }) => {
  const handleItemClick = (directoryitem) => {
    if (onSelectItem) {
      onSelectItem({ PK: directoryitem.PK, SK: directoryitem.SK });
    }
  };

  const stringifyItem = (item) => {
    const skPrefix = item.SK.match(/^[a-zA-Z]+/)?.[0];
    const skConfig = SKs.find(sk => sk.SK === skPrefix);
    const SKheading = skConfig?.SKheading || [];

    const values = SKheading
      .map(SKheading => item[SKheading])
      .filter(Boolean);

    return values.join(' ');
  };

  return (
    <div className="tableTemplate-directory" style={{ width: `${directoryWidth}px` }}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {directory.map((directoryitem) => (
            <tr key={directoryitem.SK} onClick={() => handleItemClick(directoryitem)}>
              <td>{stringifyItem(directoryitem)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTemplateDirectory;
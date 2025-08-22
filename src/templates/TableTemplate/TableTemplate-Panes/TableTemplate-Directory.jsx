// TableTemplate-Directory.jsx

const TableTemplateDirectory = ({ directory, directoryWidth, onSelectItem }) => {
  const handleItemClick = (directoryitem) => {
    if (onSelectItem) {
      onSelectItem({ PK: directoryitem.PK, SK: directoryitem.SK });
    }
  };

  return (
    <div
      className="tableTemplate-directory"
      style={{ width: `${directoryWidth}px`, overflowX: 'auto' }}
    >
      <table>
        <tbody>
          {directory.map((item, index) => (
            <tr key={item.SK || index} onClick={() => handleItemClick(item)} style={{ cursor: 'pointer' }}>
              {Object.values(item).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTemplateDirectory;
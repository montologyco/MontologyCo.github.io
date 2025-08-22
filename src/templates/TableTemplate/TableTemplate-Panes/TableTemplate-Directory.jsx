// TableTemplate-Directory.jsx

const TableTemplateDirectory = ({ directory, directoryWidth, onSelectItem, SKs = [] }) => {
  const handleItemClick = (directoryitem) => {
    if (onSelectItem) {
      onSelectItem({ PK: directoryitem.PK, SK: directoryitem.SK });
    }
  };

  return (
    <div className="tableTemplate-directory" style={{ width: `${directoryWidth}px` }}>
      <ul>
        {directory.map((directoryitem) => (
          <li key={directoryitem.SK}>
            <a href="#" onClick={(e) => { e.preventDefault(); handleItemClick(directoryitem); }}>
              {directoryitem}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableTemplateDirectory;
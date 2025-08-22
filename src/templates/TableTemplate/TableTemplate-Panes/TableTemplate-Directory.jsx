// TableTemplate-Directory.jsx

const TableTemplateDirectory = ({ directory, directoryWidth, onSelectItem, SKs = [] }) => {
  const handleItemClick = (directoryitem) => {
    if (onSelectItem) {
      onSelectItem({ PK: directoryitem.PK, SK: directoryitem.SK });
    }
  };

  const stringifyItem = (item) => {
    const skPrefix = item.SK.match(/^[a-zA-Z]+/)?.[0]; // Extract type from SK like "individual0001" → "individual"
    const skConfig = SKs.find(sk => sk.SK === skPrefix);
    const SKheading = skConfig?.SKheading || [];

    const values = SKheading
      .map(SKheading => item[SKheading])
      .filter(Boolean);

    return values.join(' ');
  };

  return (
    <div className="tableTemplate-directory" style={{ width: `${directoryWidth}px` }}>
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

export default TableTemplateDirectory;
// TableShell-Directory.jsx

import React from 'react';

const TableShellDirectory = ({ directory, directoryWidth, onSelectItem, SKs = [] }) => {
  const handleItemClick = (directoryitem) => {
    if (onSelectItem) {
      onSelectItem({ PK: directoryitem.PK, SK: directoryitem.SK });
    }
  };

  const stringifyItem = (item) => {
    const filteredItem = Object.entries(item)
      .filter(([key]) => key !== 'PK' && key !== 'SK' && key !== 'owner')
      .map(([_, value]) => value)
      .filter(Boolean);

    return filteredItem.join(' ');
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
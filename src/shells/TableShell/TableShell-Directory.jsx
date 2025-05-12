// TableShell-Directory.jsx
import React from 'react';

const TableShellDirectory = ({ directory, directoryWidth }) => {
  const handleItemClick = (directoryitem) => {
    console.log('Selected directoryitem:', directoryitem);
  };

  const stringifyItem = (item) => {
    return Object.values(item).filter(Boolean).join(' ');
  };

  return (
    <div className="tableShell-directory" style={{ width: `${directoryWidth}px` }}>
      <ul>
        {directory.map((directoryitem) => (
          <li key={directoryitem.PK}>
            <button onClick={() => handleItemClick(directoryitem)}>
              {stringifyItem(directoryitem)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableShellDirectory;
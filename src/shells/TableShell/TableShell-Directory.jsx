// TableShell-Directory.jsx

import React from 'react';

const TableShellDirectory = ({ directory, directoryWidth }) => {
  const handleItemClick = (directoryitem) => {
    console.log('Selected directoryitem:', directoryitem);
  };

  const stringifyItem = (item) => {
    // Exclude PK and SK from the item before joining the remaining values
    const filteredItem = Object.entries(item)
      .filter(([key]) => key !== 'PK' && key !== 'SK')  // Exclude 'PK' and 'SK'
      .map(([key, value]) => value)  // Get the value for each key
      .filter(Boolean);  // Remove any falsy values (e.g., empty strings)
      
    return filteredItem.join(' ');  // Join the remaining values with a space
  };

  return (
    <div className="tableShell-directory" style={{ width: `${directoryWidth}px` }}>
      <ul>
        {directory.map((directoryitem) => (
          <li key={directoryitem.PK}>
            <a href="#" onClick={() => handleItemClick(directoryitem)}>
              {stringifyItem(directoryitem)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableShellDirectory;
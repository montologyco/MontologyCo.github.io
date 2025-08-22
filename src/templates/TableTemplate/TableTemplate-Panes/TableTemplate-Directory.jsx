// TableTemplate-Directory.jsx

import React from 'react';

const TableTemplateDirectory = ({ directory, directoryWidth, onSelectItem, SKs = [] }) => {
  const handleItemClick = (directoryitem) => {
    if (onSelectItem) {
      onSelectItem({ PK: directoryitem.PK, SK: directoryitem.SK });
    }
  };
  const headingsSet = new Set();

  directory.forEach((item) => {
    const skPrefix = item.SK?.match(/^[a-zA-Z]+/)?.[0];
    const skConfig = SKs.find(entry => entry.SK === skPrefix);
    skConfig?.SKheading?.forEach(h => headingsSet.add(h));
  });

  const headings = Array.from(headingsSet);

  return (
    <div className="tableTemplate-directory" style={{ width: `${directoryWidth}px` }}>
      <table>
        <tbody>
          {directory.map((item) => (
            <tr key={item.SK} onClick={() => handleItemClick(item)} style={{ cursor: 'pointer' }}>
              {headings.map((heading) => (
                <td key={heading}>{item[heading] || ''}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTemplateDirectory;
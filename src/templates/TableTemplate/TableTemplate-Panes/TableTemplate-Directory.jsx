// TableTemplate-Directory.jsx

import React from 'react';

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
          </tr>
        </thead>
        <tbody>
            <tr>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableTemplateDirectory;
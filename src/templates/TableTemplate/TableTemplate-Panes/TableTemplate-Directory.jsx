// TableTemplate-Directory.jsx

import React from 'react';

const TableTemplateDirectory = ({ directory, directoryWidth, onSelectItem, SKs = [] }) => {
  const handleItemClick = (directoryitem) => {
    if (onSelectItem) {
      onSelectItem({ PK: directoryitem.PK, SK: directoryitem.SK });
    }
  };

  // Determine the SKheading fields for each item dynamically
  const getSKheading = (item) => {
    const skPrefix = item.SK?.match(/^[a-zA-Z]+/)?.[0];
    return SKs.find((entry) => entry.SK === skPrefix)?.SKheading || [];
  };

  return (
    <div className="tableTemplate-directory" style={{ width: `${directoryWidth}px` }}>
      <table>
        <thead>
        </thead>
        <tbody>
          {directory.map((item) => {
            const headingFields = getSKheading(item);
            const isSingleField = headingFields.length === 1;

            return (
              <tr key={item.SK} onClick={() => handleItemClick(item)} style={{ cursor: 'pointer' }}>
                <td>{item.SK}</td>
                {isSingleField ? (
                  <>
                    <td></td> {/* Blank first detail column - add more? */}
                    <td colSpan={3}>{item[headingFields[0]]}</td>
                  </>
                ) : (
                  headingFields.map((field, i) => (
                    <td key={i}>{item[field] || ''}</td>
                  ))
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableTemplateDirectory;
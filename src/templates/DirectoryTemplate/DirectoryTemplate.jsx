// DirectoryTemplate.jsx

import { useState } from 'react';

const DirectoryTemplate = ({ directory, directoryWidth, onSelectItem, SKs = [] }) => {
  const [selectedSK, setSelectedSK] = useState(null);

  const handleItemClick = (directoryitem) => {
    setSelectedSK(directoryitem.SK);
    if (onSelectItem) {
      onSelectItem({ PK: directoryitem.PK, SK: directoryitem.SK });
    }
  };

  const getSKheading = (item) => {
    const skPrefix = item.SK?.match(/^[a-zA-Z]+/)?.[0];
    return SKs.find((entry) => entry.SK === skPrefix)?.SKheading || [];
  };

  return (
    <div className="tableTemplate-directory" style={{ width: `${directoryWidth}px` }}>
      <table>
        <thead></thead>
        <tbody>
          {directory.map((item) => {
            const dynamoFields = getSKheading(item);
            const isSingleField = dynamoFields.length === 1;
            const isSelected = item.SK === selectedSK;

            return (
              <tr
                key={item.SK}
                className={isSelected ? 'selected-row' : ''}
                onClick={() => handleItemClick(item)}
                style={{ cursor: 'pointer' }}
              >
                {isSingleField ? (
                  <td colSpan={5}>
                    {item[dynamoFields[0]]}
                  </td>
                ) : (
                  dynamoFields.map((field, i) => (
                    <td key={i}>
                      {item[field] || ''}
                    </td>
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

export default DirectoryTemplate;
// TableShell-TypeSK.jsx

import React from 'react';

const TableShellTypeSK = ({ SKs = [], selectedSKs = [], onSKChange }) => {
  const handleCheckboxChange = (skValue) => {
    if (selectedSKs.includes(skValue)) {
      onSKChange(selectedSKs.filter(s => s !== skValue));
    } else {
      onSKChange([...selectedSKs, skValue]);
    }
  };

  return (
    <div className="tableShell-typeSK">
      {SKs.map((entry, index) => {
        const skString = entry?.SK;
        if (!skString) return null;

        return (
          <label key={skString || index} style={{ marginRight: '1rem' }}>
            <input
              type="checkbox"
              checked={selectedSKs.includes(skString)}
              onChange={() => handleCheckboxChange(skString)}
            />
            {skString.charAt(0).toUpperCase() + skString.slice(1)}
          </label>
        );
      })}
    </div>
  );
};

export default TableShellTypeSK;
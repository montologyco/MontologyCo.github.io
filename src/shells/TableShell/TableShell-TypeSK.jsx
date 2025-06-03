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
      {SKs.map(({ SK }) => (
        <label key={SK} style={{ marginRight: '1rem' }}>
          <input
            type="checkbox"
            checked={selectedSKs.includes(SK)}
            onChange={() => handleCheckboxChange(SK)}
          />
          {SK.charAt(0).toUpperCase() + SK.slice(1)}
        </label>
      ))}
    </div>
  );
};

export default TableShellTypeSK;
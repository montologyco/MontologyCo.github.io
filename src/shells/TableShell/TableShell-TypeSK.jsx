// TableShell-TypeSK.jsx

import React from 'react';

const TableShellTypeSK = ({ SKs = [], selectedSKs = [], onSKChange }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      onSKChange([...selectedSKs, value]);
    } else {
      onSKChange(selectedSKs.filter(sk => sk !== value));
    }
  };

  return (
    <div className="skSelector">
      {SKs.map((sk) => (
        <label key={sk}>
          <input
            type="checkbox"
            value={sk}
            checked={selectedSKs.includes(sk)}
            onChange={handleChange}
          />
          {sk.charAt(0).toUpperCase() + sk.slice(1)}
        </label>
      ))}
    </div>
  );
};

export default TableShellTypeSK;
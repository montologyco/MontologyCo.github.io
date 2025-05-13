// TableShell-TypeSK.jsx

import React from 'react';

const TableShellTypeSK = ({ SKs = [], SK, onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
    console.log('event.target.value:', event.target.value);
  };

  return (
    <div className="skSelector">
      {SKs.map((sk) => (
        <label key={sk}>
          <input
            type="radio"
            name="skType"
            value={sk}
            checked={SK === sk}
            onChange={handleChange}
          />
          {sk.charAt(0).toUpperCase() + sk.slice(1)}
        </label>
      ))}
    </div>
  );
};

export default TableShellTypeSK;
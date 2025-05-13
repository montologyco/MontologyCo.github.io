// TableShell-TypeSK.jsx

import React from 'react';

const TableShellTypeSK = ({ SKs = [], SK, setSK }) => {
  if (!SKs.length) return null;

  return (
    <div className="skSelector">
      {SKs.map((sk) => (
        <label key={sk}>
          <input
            type="radio"
            name="skType"
            value={sk}
            checked={SK === sk}
            onChange={() => setSK(sk)}
          />
          {sk.charAt(0).toUpperCase() + sk.slice(1)}
        </label>
      ))}
    </div>
  );
};

export default TableShellTypeSK;
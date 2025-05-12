// TableShell-Directory.jsx

import React from 'react';

const TableShellDirectory = ({directoryWidth}) => {
  return (
    <div className="tableShell-directory" style={{ width: `${directoryWidth}px` }}>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
        </ul>
    </div>
  );
};

export default TableShellDirectory;
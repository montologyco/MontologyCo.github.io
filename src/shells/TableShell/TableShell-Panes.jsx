// TableShell-Panes.jsx

import React, { useState } from 'react';
import TableShellDirectory from './TableShell-Directory.jsx';
import TableShellProfile from './TableShell-Profile.jsx';
import TableShellDivider from './TableShell-Divider.jsx';

const TableShellPanes = () => {
  const [directoryWidth, setDirectoryWidth] = useState(300); // initial width in px

  return (
    <div className="tableShell-panes">
      <div className="tableShell-directory" style={{ width: `${directoryWidth}px` }}>
        <TableShellDirectory />
      </div>
      <TableShellDivider onDrag={delta => setDirectoryWidth(prev => Math.max(200, prev + delta))} />
      <div className="tableShell-profile">
        <TableShellProfile />
      </div>
    </div>
  );
};

export default TableShellPanes;

// TableShell-Panes.jsx

import React, { useState } from 'react';
import TableShellDirectory from './TableShell-Directory.jsx';
import TableShellProfile from './TableShell-Profile.jsx';
import TableShellDivider from './TableShell-Divider.jsx';

const TableShellPanes = ({ directory, SKs }) => {
  const [directoryWidth, setDirectoryWidth] = useState(400);
  const [directoryitem, setDirectoryitem] = useState(null);

  return (
    <div className="tableShell-panes" style={{ display: 'flex' }}>
      <TableShellDirectory
        directory={directory}
        directoryWidth={directoryWidth}
        onSelectItem={setDirectoryitem}
        SKs={SKs} // pass SKs here
      />
      <TableShellDivider onDrag={delta => setDirectoryWidth(prev => Math.max(200, prev + delta))} />
      <TableShellProfile directoryitem={directoryitem} />
    </div>
  );
};

export default TableShellPanes;
// TableShell-Panes.jsx

import React, { useState } from 'react';
import TableShellDirectory from './TableShell-Directory.jsx';
import TableShellProfile from './TableShell-Profile.jsx';
import TableShellDivider from './TableShell-Divider.jsx';

const TableShellPanes = ({ directory }) => {
  const [directoryWidth, setDirectoryWidth] = useState(400); // initial width in px

  return (
    <div className="tableShell-panes">
      <TableShellDirectory directory={directory} directoryWidth={directoryWidth} />
      <TableShellDivider onDrag={delta => setDirectoryWidth(prev => Math.max(200, prev + delta))} />
      {/* <TableShellProfile /> */}
    </div>
  );
};

export default TableShellPanes;

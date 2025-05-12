// TableShell-Panes.jsx

import React from 'react';
import TableShellDirectory from './TableShell-Directory.jsx';
import TableShellProfile from './TableShell-Profile.jsx';
import TableShellDivider from './TableShell-Divider.jsx';

const TableShellPanes = () => {
  return (
  <div className="tableShell-panes">
    <TableShellDirectory />
    <TableShellDivider />
    <TableShellProfile />
  </div>
  );
};

export default TableShellPanes;
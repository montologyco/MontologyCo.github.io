// TableShell-Panes.jsx

import React from 'react';
import TableShellDirectory from './TableShell/TableShell-Directory.jsx';
import TableShellProfile from './TableShell/TableShell-Profile.jsx';

const TableShellPanes = () => {
  return (
  <div className="tableShell-panes">
    <div className="tableShell-directory">
      <TableShellDirectory />
    </div>
    <div className="tableShell-profile">
      <TableShellProfile />
    </div>
  </div>
  );
};

export default TableShellPanes;
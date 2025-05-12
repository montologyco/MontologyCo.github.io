// TableShell.jsx

import React from 'react';
import Search from '../Search/Search.jsx';
import TableShellPanes from './TableShell-Panes.jsx';

const TableShell = ({ directory }) => {
  return (
    <div className="tableShell">
      <div className="searchTopbar">
        <Search />
      </div>
      <TableShellPanes directory={directory} />
    </div>
  );
};

export default TableShell;
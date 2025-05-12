// TableShell.jsx

import React from 'react';
import Search from '../Search/Search.jsx';
import TableShellPanes from './TableShell-Panes.jsx';

const TableShell = () => {
  return (
    <div className="tableShell">
      <div className="searchTopbar">
        <Search />
      </div>
      <TableShellPanes />
    </div>
  );
};

export default TableShell;
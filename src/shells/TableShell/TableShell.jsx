// TableShell.jsx

import React from 'react';
import Search from '../Search/Search.jsx';
import TableShellPanes from './TableShell-Panes.jsx';

const TableShell = ({ directory, query, handleSearch }) => {
  return (
    <div className="tableShell">
      <div className="searchTopbar">
        <Search query={query} onSearch={handleSearch} />
      </div>
      <TableShellPanes directory={directory} />
    </div>
  );
};

export default TableShell;
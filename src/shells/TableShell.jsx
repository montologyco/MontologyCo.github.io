// TableShell.jsx

import React from 'react';
import Search from './Search/Search.jsx';
import TableShellDirectory from './TableShell/TableShell-Directory.jsx';

const TableShell = () => {
  return (
    <div className="tableShell">
      <div className="searchTopbar">
        <Search />
      </div>
      <div className="tableShell-panes">
        <div className="tableShell-directory"> // what to name this class?
          <p>left/table</p>
          <TableShellDirectory />
        </div>
        <div className="tableShell-profile">
          <p>right/profile</p>
        </div>
      </div>
    </div>
  );
};

export default TableShell;
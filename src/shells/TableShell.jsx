// TableShell.jsx

import React from 'react';
import Search from './Search/Search.jsx';
import TableShellDirectory from './TableShell/TableShell-Directory.jsx';
import TableShellProfile from './TableShell/TableShell-Profile.jsx';

const TableShell = () => {
  return (
    <div className="tableShell">
      <div className="searchTopbar">
        <Search />
      </div>
      <div className="tableShell-panes">
        <div className="tableShell-directory">
          <TableShellDirectory />
        </div>
        <div className="tableShell-profile">
          <p>right/profile</p>
          <TableShellProfile />
        </div>
      </div>
    </div>
  );
};

export default TableShell;
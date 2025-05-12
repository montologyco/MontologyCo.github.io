// TableShell.jsx

import React, { useState } from 'react';
import Search from '../Search/Search.jsx';
import TableShellPanes from './TableShell-Panes.jsx';
import TableShellFilter from './TableShell-Filter.jsx';

const TableShell = ({ PK }) => {
  const [directory, setDirectory] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <div className="tableShell">
      <div className="searchTopbar">
        <Search query={query} onSearch={handleSearch} />
      </div>
      <TableShellFilter query={query} PK={PK} setDirectory={setDirectory} />
      <TableShellPanes directory={directory} />
    </div>
  );
};

export default TableShell;
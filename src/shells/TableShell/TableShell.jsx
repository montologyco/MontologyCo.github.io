// TableShell.jsx

import React, { useState } from 'react';
import Search from '../Search/Search.jsx';
import TableShellPanes from './TableShell-Panes.jsx';
import TableShellFilter from './TableShell-Filter.jsx';

const TableShell = ({ name }) => {
  const [directory, setDirectory] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [SK, setSK] = useState('');

  const handleSearch = (searchQuery) => {
    setInputValue(searchQuery);
  };

  return (
    <div className="tableShell">
      <div className="searchTopbar">
        <Search inputValue={inputValue} onSearch={handleSearch} />
        <div>
          <select>individual</select><select>business</select><select>campaign</select>
        </div>
      </div>
      <TableShellFilter inputValue={inputValue} name={name} SK={SK} setDirectory={setDirectory} />
      <TableShellPanes directory={directory} />
    </div>
  );
};

export default TableShell;
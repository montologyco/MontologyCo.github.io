// TableShell.jsx

import React, { useState, useEffect } from 'react';
import Search from '../Search/Search.jsx';
import TableShellTypeSK from './TableShell-TypeSK.jsx';
import TableShellPanes from './TableShell-Panes.jsx';
import TableShellFilter from './TableShell-Filter.jsx';
import applications from '../../navigation/applications.json';

const TableShell = ({ name }) => {
  const [directory, setDirectory] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
  const { PK, SKs = [] } = applications.links.find(link => link.name === name) || {};
  const [SK, setSK] = useState('');

  const handleSearch = (value) => {
    if (SKs.includes(value)) {
      setSK(value);
    } else {
      setInputValue(value);
    }
  };

  return (
    <div className="tableShell">
      <div className="searchTopbar">
        <Search inputValue={inputValue} onSearch={handleSearch} />
        <TableShellTypeSK SKs={SKs} SK={SK} onSearch={handleSearch} />
      </div>
      <TableShellFilter inputValue={inputValue} PK={PK} SK={SK} setDirectory={setDirectory} />
      <TableShellPanes directory={directory} />
    </div>
  );
};

export default TableShell;
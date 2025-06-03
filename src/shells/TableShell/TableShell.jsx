// TableShell.jsx

import React, { useState } from 'react';
import Search from '../Search/Search.jsx';
import TableShellTypeSK from './TableShell-TypeSK.jsx';
import TableShellPanes from './TableShell-Panes/TableShell-Panes.jsx';
import TableShellFilter from './TableShell-Filter.jsx';
import applications from '../../navigation/applications.json';

const TableShell = ({ name }) => {
  const [directory, setDirectory] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const { PK, SKs = [] } = applications.links.find(link => link.name === name) || {};
  const [selectedSKs, setSelectedSKs] = useState([]);

  const handleSearch = (value) => {
    setInputValue(value);
  };

  return (
    <div className="tableShell">
      <div className="searchTopbar">
        <Search inputValue={inputValue} onSearch={handleSearch} />
        <TableShellTypeSK SKs={SKs} selectedSKs={selectedSKs} onSKChange={setSelectedSKs} />
      </div>
      <TableShellFilter inputValue={inputValue} PK={PK} selectedSKs={selectedSKs} setDirectory={setDirectory} />
      <TableShellPanes directory={directory} SKs={SKs} />
    </div>
  );
};

export default TableShell;
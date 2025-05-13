// TableShell.jsx

import React, { useState } from 'react';
import Search from '../Search/Search.jsx';
import TableShellPanes from './TableShell-Panes.jsx';
import TableShellFilter from './TableShell-Filter.jsx';
import applications from '../../navigation/applications.json';

const TableShell = ({ name }) => {
  const [directory, setDirectory] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [SK, setSK] = useState('individual');
  const { PK } = applications.links.find(link => link.name === name) || {};

  const handleSearch = (searchQuery) => {
    setInputValue(searchQuery);
  };

  return (
    <div className="tableShell">
      <div className="searchTopbar">
        <Search inputValue={inputValue} onSearch={handleSearch} />
        <div>
          <label>
            <input
              type="checkbox"
              checked={SK === 'individual'}
              onChange={() => setSK('individual')}
            />
            Individual
          </label>
          <label>
            <input
              type="checkbox"
              checked={SK === 'business'}
              onChange={() => setSK('business')}
            />
            Business
          </label>
          <label>
            <input
              type="checkbox"
              checked={SK === 'campaign'}
              onChange={() => setSK('campaign')}
            />
            Campaign
          </label>
        </div>
      </div>
      <TableShellFilter inputValue={inputValue} PK={PK} SK={SK} setDirectory={setDirectory} />
      <TableShellPanes directory={directory} />
    </div>
  );
};

export default TableShell;
// TableTemplate.jsx

import { useState } from 'react';
import Search from '../Search/Search.jsx';
import TableTemplateTypeSK from './TableTemplate-TypeSK.jsx';
import TableTemplatePanes from './TableTemplate-Panes/TableTemplate-Panes.jsx';
import TableTemplateFilter from './TableTemplate-Filter.jsx';
import applications from '../../navigation/applications.json';

const TableTemplate = ({ setIsAuthenticated,application }) => {
  const [directory, setDirectory] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const { PK, SKs = [] } = applications.links.find(link => link.application === application) || {};
  const [selectedSKs, setSelectedSKs] = useState([]);

  const handleSearch = (value) => {
    setInputValue(value);
  };

  return (
    <div className="tableTemplate">
      <div className="searchTopbar">
        <AuthChecker setAuthState={setIsAuthenticated} />
        <Search inputValue={inputValue} onSearch={handleSearch} />
        <TableTemplateTypeSK SKs={SKs} selectedSKs={selectedSKs} onSKChange={setSelectedSKs} />
      </div>
      <TableTemplateFilter inputValue={inputValue} PK={PK} selectedSKs={selectedSKs} setDirectory={setDirectory} />
      <TableTemplatePanes directory={directory} SKs={SKs} />
    </div>
  );
};

export default TableTemplate;
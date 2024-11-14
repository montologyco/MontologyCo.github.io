// src/components/ViewSwitcher.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Search from './Search/Search.jsx';
import Details from './Details/Details.jsx'; 
import Table from './Table/Table.jsx';
import BulkUpload from './BulkUpload/BulkUpload.jsx';

const ViewSwitcherAPI = () => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const handleAddNew = () => {
      navigate('new');
  };

  const handleBulkUpload = () => {
      navigate('bulkupload');
  };

  return (
    <div>
      <div className='tableOperations'>
        <Search tableData={tableData} setFilteredData={setFilteredData} />
        <div className='add'>
          <button type="button" onClick={handleAddNew}>Add New</button>
          <button type="button" onClick={handleBulkUpload}>Bulk Upload</button>
        </div>
      </div>
      <Routes>
        <Route path={`new`} element={<Details />} /> 
        <Route path={`bulkupload`} element={<BulkUpload />} /> 
        <Route path={`:id`} element={<Details/>} />
        <Route path="" element={
          <Table
            tableData={tableData}
            setTableData={setTableData}
            filteredData={filteredData}
            setFilteredData={setFilteredData}
          />
        } /> 
      </Routes>
    </div>
  );
};

export default ViewSwitcherAPI;
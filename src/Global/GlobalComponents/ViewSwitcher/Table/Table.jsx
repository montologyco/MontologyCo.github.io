import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TableDataFetch from '../../../GlobalFetch/ViewSwitcherFetch/TableFetch/TableDataFetch.jsx';
import TableFields from './TableFields.jsx';

const Table = ({tableData, setTableData, filteredData, setFilteredData}) => {
    const { table } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        TableDataFetch(table, setTableData);
    }, [navigate]);

    return (
        <div>
            <TableFields
                table={table}
                tableData={tableData}
                filteredData={filteredData}
                setFilteredData={setFilteredData}
            />
        </div>
    );
};

export default Table;
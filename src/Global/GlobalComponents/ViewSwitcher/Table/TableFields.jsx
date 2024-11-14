import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TableFetch from '../../../GlobalFetch/ViewSwitcherFetch/TableFetch/TableFetch.jsx';
import TableSort from './TableSort';

const TableFields = ({ table, tableData, filteredData, setFilteredData }) => {
    const [headers, setHeaders] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [sortedData, setSortedData] = useState([]);

    const isIdField = headers.length > 0 && headers[0].endsWith('_id');
    const slicedHeaders = isIdField ? headers.slice(1) : headers;

    useEffect(() => {
        setFilteredData(tableData);
    }, [tableData]);

    useEffect(() => {
        let sortableItems = [...filteredData];
        if (sortConfig.key) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] == null) return 1;
                if (b[sortConfig.key] == null) return -1;
                if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
                if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
                return 0;
            });
        }
        setSortedData(sortableItems);
    }, [filteredData, sortConfig]);

    return (
        <div>
            <TableFetch
                table={table}
                setHeaders={setHeaders}
                setTypes={() => {}}
            />
            <table>
                <thead>
                    <tr>
                        <TableSort 
                            headers={slicedHeaders}
                            setSortConfig={setSortConfig}
                            sortConfig={sortConfig}
                            tableData={filteredData}
                            setSortedData={setSortedData}
                        />
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((data, id) => (
                        <tr key={id}>
                            {slicedHeaders.map((header, id) => (
                                <td key={id}>
                                    <Link to={`/${table}/${data[headers[0]]}`}>
                                        {data[header]}
                                    </Link>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableFields;
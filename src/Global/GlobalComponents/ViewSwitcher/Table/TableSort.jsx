// TableSort.jsx
import React, { useEffect } from 'react';

const TableSort = ({ headers, sortConfig, setSortConfig, tableData, setSortedData }) => {
    const requestSort = (key) => {
        let direction = 'ascending';
        setSortConfig((prevConfig) => {
            if (prevConfig.key === key && prevConfig.direction === 'ascending') {
                direction = 'descending';
            }
            return { key, direction };
        });
    };

    useEffect(() => {
        let sortableItems = [...tableData];
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
    }, [tableData, sortConfig]);

    return (
        <>
            {headers.map((header) => (
                <th key={header} onClick={() => requestSort(header)} style={{ cursor: 'pointer' }}>
                    {header.charAt(0).toUpperCase() + header.slice(1)}
                    {header === sortConfig.key ? (sortConfig.direction === 'ascending' ? ' ▲' : ' ▼') : ''}
                </th>
            ))}
        </>
    );
};

export default TableSort;
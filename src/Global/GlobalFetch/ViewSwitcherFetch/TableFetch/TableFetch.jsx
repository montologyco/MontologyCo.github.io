// TableFetch.jsx
import React from 'react';
import TableHeadersFetch from './TableHeadersFetch.jsx';
import TableTypesFetch from './TableTypesFetch.jsx';

const TableFetch = ({ table, setHeaders, setTypes }) => {
    return (
        <>
            <TableHeadersFetch
                table={table}
                setHeaders={setHeaders}
            />
            <TableTypesFetch
                table={table}
                setTypes={setTypes}
            />
        </>
    );
};

export default TableFetch;
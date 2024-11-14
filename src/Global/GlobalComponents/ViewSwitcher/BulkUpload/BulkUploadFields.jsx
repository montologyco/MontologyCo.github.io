import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TableFetch from '../../../GlobalFetch/ViewSwitcherFetch/TableFetch/TableFetch.jsx';

const BulkUploadFields = ({ parsedData, onSelectChange }) => {
    const { table } = useParams();
    const [tableHeaders, setTableHeaders] = useState([]);
    const [selectedHeaders, setSelectedHeaders] = useState({});

    const uploadHeaders = parsedData.length > 0 ? parsedData[0] : [];

    return (
        <div>
            <TableFetch
                table={table}
                setHeaders={setTableHeaders}
                setTypes={() => {}}
            />
            {uploadHeaders.map((header, index) => (
                <div key={index}>
                    {header}:
                    <select 
                        onChange={(e) => {
                            const value = e.target.value;
                            setSelectedHeaders((prev) => ({ ...prev, [header]: value }));
                            onSelectChange(header, value);
                        }} 
                        value={selectedHeaders[header] || ""}
                    >
                        <option value=""></option>
                        {tableHeaders.map((tableHeader, i) => {
                            const isSelected = Object.values(selectedHeaders).includes(tableHeader);
                            return (
                                <option key={i} value={tableHeader} disabled={isSelected}>
                                    {tableHeader}
                                </option>
                            );
                        })}
                    </select>
                </div>
            ))}
        </div>
    );
};

export default BulkUploadFields;
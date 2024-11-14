import React, { useState } from 'react';
import ExcelJS from 'exceljs';

const BulkUploadInputButtons = ({ file, setFile, setParsedData }) => {
    const [worksheet, setWorksheet] = useState(null);
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async () => {
        if (file) {
            const fileType = file.name.split('.').pop();

            if (fileType === 'csv') {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const text = e.target.result;
                    const rows = text.split('\n').map(row => row.split(','));
                    setParsedData(rows);
                };
                reader.readAsText(file);
            } else if (fileType === 'xlsx' || fileType === 'xls') {
                const workbook = new ExcelJS.Workbook();
                await workbook.xlsx.load(await file.arrayBuffer());
                const worksheet = workbook.worksheets[0];
                const rows = [];

                worksheet.eachRow((row) => {
                    rows.push(row.values);
                });
                
                setWorksheet(worksheet._name);
                setParsedData(rows);
            }
        }
    };

    return (
        <div>
            {!file ? (
                <button onClick={() => document.getElementById('fileInput').click()}>
                    Choose File
                </button>
            ) : worksheet === null ? ( // Check if parsedData is empty
                <button onClick={handleSubmit}>
                    Submit File
                </button>
            ) : null}

            <input 
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
        </div>
    );
};

export default BulkUploadInputButtons;
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BulkUploadFields from './BulkUploadFields.jsx';
import BulkUploadInputButtons from './BulkUploadInputButtons.jsx';
import BulkUploadSubmitButton from './BulkUploadSubmitButton.jsx';

const BulkUpload = () => {
    const { table } = useParams();
    const [file, setFile] = useState(null);
    const [parsedData, setParsedData] = useState([]);
    const [selectedHeaders, setSelectedHeaders] = useState({}); // State to track selected headers

    const handleHeaderSelection = (header, value) => {
        setSelectedHeaders((prev) => ({ ...prev, [header]: value }));
    };

    return (
        <div>
            <h2>
                Bulk Upload for {table.charAt(0).toUpperCase() + table.slice(1)}
                {parsedData.length === 0 ? "" : `: ${file.name}`}
            </h2>
            {file && parsedData.length === 0 && <p>{file.name}</p>}
            <BulkUploadInputButtons 
                file={file}
                setFile={setFile}
                setParsedData={setParsedData}
            />
            {parsedData.length > 0 && (
                <div>
                    <form>
                        <BulkUploadFields
                            parsedData={parsedData}
                            onSelectChange={handleHeaderSelection} // Pass the handler to BulkUploadFields
                        />
                        <BulkUploadSubmitButton
                            newData={parsedData}
                        />
                    </form>
                </div>
            )}
        </div>
    );
};

export default BulkUpload;
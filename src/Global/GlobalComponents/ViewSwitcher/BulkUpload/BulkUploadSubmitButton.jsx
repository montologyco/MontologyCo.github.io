import React from 'react';
import { useParams } from 'react-router-dom';
import AddNewRecordFetch from '../../../GlobalFetch/ViewSwitcherFetch/DetailsFetch/DetailsButtonFetch/AddNewRecordFetch.jsx';

const BulkUploadSubmitButton = ({ newData }) => {
    const { table } = useParams();

    // console.log(newData);
    
    const handleSubmit = async () => {
        try {
            await AddNewRecordFetch({ table, newData });
            console.log('Records added successfully');
        } catch (error) {
            console.error("Failed to add records:", error);
        }
    };

    return (
        <div>
            <button 
                type="button" 
                onClick={handleSubmit}
            >
                Add Records
            </button>
        </div>
    );
};

export default BulkUploadSubmitButton;
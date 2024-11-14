import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AddNewRecordFetch from '../../../GlobalFetch/ViewSwitcherFetch/DetailsFetch/DetailsButtonFetch/AddNewRecordFetch.jsx';
import DeleteRecordFetch from '../../../GlobalFetch/ViewSwitcherFetch/DetailsFetch/DetailsButtonFetch/DeleteRecordFetch.jsx';
import EditRecordFetch from '../../../GlobalFetch/ViewSwitcherFetch/DetailsFetch/DetailsButtonFetch/EditRecordFetch.jsx';

const DetailsButton = ({ table, newData, exists, setExists }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleEditRecord = async () => {
        const response = await EditRecordFetch({ table, id, newData });
        const IDKey = Object.keys(response)[0];
        const newID = response[IDKey];

        if (newID !== id) {
            navigate(`/${table}/${newID}`);
        }
        
        window.alert('Record saved');
    };

    const handleDeleteRecord = () => {
        DeleteRecordFetch({ table, id });
        navigate(`/${table}`);
        window.alert('Record deleted');
        window.location.reload();
    };

    const handleAddRecord = async () => {
        const response = await AddNewRecordFetch({ table, newData });
        setExists(true);
        navigate(`/${table}/${response}`);
    };

    return (
        <div>
            {exists === true ? (
                <>
                    <button type="button" onClick={handleEditRecord}>Save</button>
                    <button type="button" onClick={handleDeleteRecord}>Delete</button>
                </>
            ) : (
                <>
                    <button type="button" onClick={handleAddRecord}>Add Record</button>
                </>
            )}
        </div>
    );
};

export default DetailsButton;
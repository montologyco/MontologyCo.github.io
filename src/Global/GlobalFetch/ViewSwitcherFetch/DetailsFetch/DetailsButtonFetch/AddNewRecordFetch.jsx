import axios from 'axios';
import baseURL from '../../../ServerConfig.jsx';

const activeApp = window.location.hostname.split('.')[0];

const AddNewRecordFetch = async ({ table, newData }) => {
    try {
        const response = await axios.post(`${baseURL}/table/${activeApp}/${table}/new`, newData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const newID = response.data;
        return newID;
    } catch (error) {
        console.error('Error sending new record newData:', error);
        throw error;
    }
};

export default AddNewRecordFetch;
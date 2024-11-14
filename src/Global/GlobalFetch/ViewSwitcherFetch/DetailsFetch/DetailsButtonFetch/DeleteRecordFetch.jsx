import axios from 'axios';
import baseURL from '../../../ServerConfig.jsx';

const activeApp = window.location.hostname.split('.')[0];

const DeleteRecordFetch = async ({ table, id }) => {
    try {
        const response = await axios.delete(`${baseURL}/table/${activeApp}/${table}/delete`, {
            headers: {
                'Content-Type': 'application/json',
            },
            data: { id }
        });

        return response.data;
    } catch (error) {
        console.error('Error deleting record:', error);
        throw error;
    }
};

export default DeleteRecordFetch;
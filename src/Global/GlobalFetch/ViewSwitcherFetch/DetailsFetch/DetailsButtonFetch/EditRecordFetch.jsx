import axios from 'axios';
import baseURL from '../../../ServerConfig.jsx';

const activeApp = window.location.hostname.split('.')[0];

const EditRecordFetch = async ({ table, id, newData }) => {

    try {
        const url = `${baseURL}/table/${activeApp}/${table}/edit`;

        const response = await axios.put(url, newData, {
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                id: id,
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error editing record:', error);
        throw error;
    }
};

export default EditRecordFetch;
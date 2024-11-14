import axios from 'axios';
import baseURL from '../../Global/GlobalFetch/ServerConfig.jsx';

const UserEditFetch = async (table, setTableData) => {
    try {
        const response = await axios.get(`${baseURL}/table/${table}`);
        setTableData(response.data);
    } catch (error) {
        console.error('Error updating data:', error);
    }
};

export default UserEditFetch;
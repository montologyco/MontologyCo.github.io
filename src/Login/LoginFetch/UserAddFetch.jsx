import axios from 'axios';
import baseURL from '../../Global/GlobalFetch/ServerConfig.jsx';

const UserAddFetch = async (table, setTableData) => {
    try {
        const response = await axios.get(`${baseURL}/table/${table}`);
        setTableData(response.data);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
};

export default UserAddFetch;
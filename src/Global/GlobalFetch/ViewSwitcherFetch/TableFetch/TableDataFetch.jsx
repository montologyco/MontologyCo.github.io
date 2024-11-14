import axios from 'axios';
import baseURL from '../../ServerConfig.jsx';

const activeApp = window.location.hostname.split('.')[0];

const TableDataFetch = async (table, setTableData) => {
    try {
        const response = await axios.get(`${baseURL}/table/${activeApp}/${table}`);
        setTableData(response.data);
    } catch (error) {
        console.error('Error fetching table data:', error);
    }
};

export default TableDataFetch;
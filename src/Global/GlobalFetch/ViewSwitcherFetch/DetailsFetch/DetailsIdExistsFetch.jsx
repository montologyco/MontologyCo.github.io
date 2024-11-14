import axios from 'axios';
import baseURL from '../../ServerConfig.jsx';

const activeApp = window.location.hostname.split('.')[0];

const DetailsIdExistsFetch = async (table, id, setExists) => {
    if (id === "new") {
        setExists(false); 
        return;
    }
    
    try {
        const response = await axios.get(`${baseURL}/table/${activeApp}/${table}/${id}/exists`);
        setExists(response.data.exists);
    } catch (error) {
        console.error('Error checking if ID exists:', error);
        setExists(false);
    }
};

export default DetailsIdExistsFetch;
import axios from 'axios';
import baseURL from '../../ServerConfig.jsx';

const activeApp = window.location.hostname.split('.')[0];

const convertDates = (data) => {
    const convertedData = { ...data };

    Object.keys(data).forEach((key) => {
        const value = data[key];

        if (typeof value === 'string' && value.includes('00Z')) {
            const dateObject = new Date(value);
            if (!isNaN(dateObject.getTime())) {
                convertedData[key] = dateObject.toISOString().split('T')[0];
            }
        }
    });

    return convertedData;
};

const DetailsByIdFetch = async (table, id, setData) => {
    try {
        const response = await axios.get(`${baseURL}/table/${activeApp}/${table}/${id}`);
        const convertedData = convertDates(response.data);
        setData(convertedData);
    } catch (error) {
        console.error('Error fetching data by ID:', error);
        setData(null);
    }
    return null;
};

export default DetailsByIdFetch;
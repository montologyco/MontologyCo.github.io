// TableHeadersFetch.jsx
import { useEffect } from 'react';
import axios from 'axios';
import baseURL from '../../ServerConfig.jsx';

const activeApp = window.location.hostname.split('.')[0];

const TableHeadersFetch = ({ table, setHeaders }) => {
    useEffect(() => {
        const fetchHeaders = async () => {
            try {
                const response = await axios.get(`${baseURL}/table/${activeApp}/${table}/headers`);
                setHeaders(response.data);
            } catch (error) {
                console.error('Error fetching table headers:', error);
            }
        };

        fetchHeaders();
    }, [table, setHeaders]);

    return null;
};

export default TableHeadersFetch;
import { useEffect } from 'react';
import axios from 'axios';
import baseURL from '../../ServerConfig.jsx';

const activeApp = window.location.hostname.split('.')[0];

const typeMapping = {
    'character varying': 'text',
    'text': 'textarea',
    'numeric': 'number',
    'integer': 'number',
    'date': 'date',
    'timestamp without time zone': 'date',
    'timestamp': 'datetime-local',
};

const TableTypesFetch = ({ table, setTypes }) => {
    useEffect(() => {
        const fetchTypes = async () => {
            try {
                const response = await axios.get(`${baseURL}/table/${activeApp}/${table}/types`);
                const headers = response.data.map(column => column.column_name);

                const types = response.data.reduce((acc, column) => {
                    acc[column.column_name] = typeMapping[column.data_type] || 'text';
                    return acc;
                }, {});

                setTypes(types);
            } catch (error) {
                console.error('Error fetching table types:', error);
            }
        };

        fetchTypes();
    }, [table, setTypes]);

    return null;
};

export default TableTypesFetch;
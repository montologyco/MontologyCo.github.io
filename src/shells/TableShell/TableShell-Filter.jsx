// TableShellFilter.jsx

import React, { useEffect } from 'react';
import queryItems from '../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-queryItems-API.jsx';
import applications from '../../navigation/applications.json';

const TableShellFilter = ({ name, SK, inputValue, setDirectory }) => {
    const { PK, SK } = applications.links.find(link => link.name === name) || {};
    useEffect(() => {
        const fetchData = async () => {
            const data = await queryItems(PK, SK, inputValue)
            setDirectory(data);
        };

        fetchData();
    }, [PK, inputValue, setDirectory]);

    return <div className="tableShellFilter" />;
};

export default TableShellFilter;
// TableShellFilter.jsx

import React, { useEffect } from 'react';
import queryItems from '../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-queryItems-API.jsx';
import applications from '../../navigation/applications.json';

const TableShellFilter = ({ name, inputValue, setDirectory }) => {
    const { PK, primarySK } = applications.links.find(link => link.name === name) || {};
    console.log("TableShellFilter", name, PK, primarySK);
    useEffect(() => {
        const fetchData = async () => {
            const data = await queryItems(PK, primarySK, inputValue)
            setDirectory(data);
        };

        fetchData();
    }, [PK, inputValue, setDirectory]);

    return <div className="tableShellFilter" />;
};

export default TableShellFilter;
// TableShellFilter.jsx

import React, { useEffect } from 'react';
import queryItems from '../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-queryItems-API.jsx';
import applications from '../../navigation/applications.json';

const TableShellFilter = ({ PK, inputValue, setDirectory }) => {
    const { primarySK } = applications.links.find(link => link.PK === PK) || {};
    console.log("TableShellFilter", PK, primarySK);
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
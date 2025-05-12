// TableShellFilter.jsx

import React, { useEffect } from 'react';
import queryItems from '../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-queryItems-API.jsx';
import applications from '../../navigation/applications.json';

const TableShellFilter = ({ PK, query, setDirectory }) => {
    const { primarySK } = applications.links.find(link => link.PK === PK) || {};
    useEffect(() => {
        const fetchData = async () => {
            const data = await queryItems(PK, primarySK)
        //   const filteredData = await queryItems(PK, primarySK, inputValue);
            setDirectory(data);
        };

        fetchData();
    }, [PK, query, setDirectory]);

    return <div className="tableShellFilter" />;
};

export default TableShellFilter;
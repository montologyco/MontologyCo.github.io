// TableShellFilter.jsx

import React, { useEffect } from 'react';
import queryItems from '../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-queryItems-API.jsx';

const TableShellFilter = ({ PK, SK, inputValue, setDirectory }) => {
    console.log('TableShellFilter', PK, SK, inputValue);
    useEffect(() => {
        const fetchData = async () => {
            const data = await queryItems(PK, SK, inputValue)
            setDirectory(data);
        };

        fetchData();
    }, [PK, SK, inputValue, setDirectory]);

    return <div className="tableShellFilter" />;
};

export default TableShellFilter;
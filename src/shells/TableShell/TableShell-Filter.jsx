// TableShellFilter.jsx

import React, { useEffect } from 'react';
import queryItems from '../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-queryItems-API.jsx';
import applications from '../../navigation/applications.json';

const TableShellFilter = ({ PK, query, setDirectory }) => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await queryItems(PK)
    //   const filteredData = await queryItems(PK, primarySK, inputValue);
      setDirectory(data);
    };

    fetchData();
  }, [PK, query, setDirectory]);

  return <div className="tableShellFilter" />;
};

export default TableShellFilter;
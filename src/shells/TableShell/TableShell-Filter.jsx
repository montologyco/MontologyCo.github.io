// TableShellFilter.jsx

import React, { useEffect } from 'react';
import queryItems from '../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-queryItems-API.jsx';
import applications from '../../navigation/applications.json';

const TableShellFilter = ({ PK, inputValue, setDirectory }) => {
  useEffect(() => {
    const fetchData = async () => {
      const { primarySK } = applications.links.find(link => link.PK === PK) || {};

      if (primarySK) {
        const filteredData = await queryItems(PK, primarySK, inputValue);
        setDirectory(filteredData);
      }
    };

    fetchData();
  }, [PK, inputValue, setDirectory]);

  return <div className="tableShellFilter" />;
};

export default TableShellFilter;
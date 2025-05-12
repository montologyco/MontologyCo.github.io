// TableShellFilter.jsx

import React, { useEffect } from 'react';
import queryItems from '../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-queryItems-API.jsx';
import applications from '../../navigation/applications.json';

const TableShellFilter = ({ PK, query, setDirectory }) => {
  useEffect(() => {
    const fetchData = async () => {
      const appConfig = applications.links.find(link => link.PK === PK);

      if (appConfig) {
        const { primarySK } = appConfig;

        const data = await queryItems(PK, primarySK || '');

        const filteredData = query
          ? data.filter(item => item.name.includes(query))
          : data;

        setDirectory(filteredData);
      }
    };

    fetchData();
  }, [PK, query, setDirectory]);

  return <div className="tableShellFilter" />;
};

export default TableShellFilter;
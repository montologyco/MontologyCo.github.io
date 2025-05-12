// TableShellFilter.jsx

import React, { useEffect } from 'react';
import queryItems from '../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-queryItems-API.jsx';

const TableShellFilter = ({ PK, query, setDirectory }) => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await queryItems(PK);
      setDirectory(data);
    };

    fetchData();
  }, [PK, query, setDirectory]);

  return <div className="tableShellFilter" />;
};

export default TableShellFilter;
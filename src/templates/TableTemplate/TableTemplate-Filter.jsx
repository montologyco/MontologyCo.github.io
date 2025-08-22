// TableTemplate-Filter.jsx

import { useEffect } from 'react';
import queryItems from '../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-queryItems-API.jsx';

const TableTemplateFilter = ({ PK, selectedSKs, inputValue, setDirectory }) => {

  useEffect(() => {
    const fetchData = async () => {
      const data = await queryItems(PK, selectedSKs, inputValue);
      setDirectory(data);
    };

    fetchData();
  }, [PK, selectedSKs, inputValue, setDirectory]);

  return <div className="tableTemplateFilter" />;
};

export default TableTemplateFilter;

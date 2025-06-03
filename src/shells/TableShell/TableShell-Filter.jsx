// TableShell-Filter.jsx

import { useEffect } from 'react';
import queryItems from '../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-queryItems-API.jsx';

const TableShellFilter = ({ PK, selectedSKs, inputValue, setDirectory }) => {
  console.log('TableShellFilter', PK, selectedSKs, inputValue);

  useEffect(() => {
    const fetchData = async () => {
      const data = await queryItems(PK, selectedSKs, inputValue);
      setDirectory(data);
    };

    fetchData();
  }, [PK, selectedSKs, inputValue, setDirectory]);

  return <div className="tableShellFilter" />;
};

export default TableShellFilter;
import React, { useState, useEffect } from 'react';
import TableDataFetch from '../../Global/GlobalFetch/ViewSwitcherFetch/TableFetch/TableDataFetch';
import BudgetologyConfig from './BudgetologyConfig.jsx';

const Summary = () => {
  const [tableData, setTableData] = useState({});

  useEffect(() => {
    Object.entries(BudgetologyConfig().sections).forEach(([table]) => {
      TableDataFetch(table, (fetchedData) => {
        setTableData(prevData => ({
          ...prevData,
          [table]: fetchedData
        }));
      });
    });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.entries(BudgetologyConfig().sections).map(([table, { label }]) => (
              <th key={table}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.entries(BudgetologyConfig().sections).map(([table]) => (
              <td key={table}>{tableData[table] ? tableData[table].length : 0}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
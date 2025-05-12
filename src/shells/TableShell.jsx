// TableShell.jsx

import React from 'react';
import Search from './Search/Search.jsx';

const TableShell = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b flex justify-center">
        <Search />
      </div>
      <div className="flex flex-1">
        <div className="flex-1 border-r p-4">
          <p>left</p>
        </div>
        <div className="flex-1 p-4">
          <p>right</p>
        </div>
      </div>
    </div>
  );
};

export default TableShell;
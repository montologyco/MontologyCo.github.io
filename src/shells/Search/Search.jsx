// Search.jsx

import React from 'react';

const Search = ({ inputValue, onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder="Search..."
      className="searchInput"
    />
  );
};

export default Search;
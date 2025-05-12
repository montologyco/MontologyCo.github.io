// Search.jsx

import React from 'react';

const Search = ({ query, onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search..."
      className="searchInput"
    />
  );
};

export default Search;
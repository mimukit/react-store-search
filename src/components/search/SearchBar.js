import React from 'react';

const SearchBar = ({ onSearchTextChange, onSearchSubmit }) => (
  <div className="search-bar">
    <input
      type="text"
      name="searchText"
      onChange={onSearchTextChange}
      onKeyPress={e => {
        if (e.key === 'Enter') {
          onSearchSubmit();
        }
      }}
    />
    <button onClick={onSearchSubmit}>Search</button>
  </div>
);

export default SearchBar;

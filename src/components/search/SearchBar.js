import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ searchText, onSearchTextChange, onSearchSubmit }) => (
  <div className="search-bar">
    <input
      type="text"
      name="searchText"
      value={searchText}
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

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
};

export default SearchBar;

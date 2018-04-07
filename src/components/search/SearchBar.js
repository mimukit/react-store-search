import React from 'react';
import PropTypes from 'prop-types';

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

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
};

export default SearchBar;

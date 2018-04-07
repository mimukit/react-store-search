import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TimeTravel from './TimeTravel';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

const Search = ({
  onSearchTextChange,
  onSearchSubmit,
  addToCart,
  isSearchSubmitted,
  searchResult,
  isLoading,
}) => (
  <section className="search-section">
    <div className="search-section-header">
      <TimeTravel />
      <SearchBar
        onSearchTextChange={onSearchTextChange}
        onSearchSubmit={onSearchSubmit}
      />
    </div>
    <SearchResult
      addToCart={addToCart}
      isSearchSubmitted={isSearchSubmitted}
      searchResult={searchResult}
      isLoading={isLoading}
    />
  </section>
);

Search.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  isSearchSubmitted: PropTypes.bool.isRequired,
  searchResult: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Search;

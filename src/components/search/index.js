import React from 'react';
import PropTypes from 'prop-types';

import TimeTravel from './TimeTravel';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

const Search = ({
  searchText,
  onSearchTextChange,
  onSearchSubmit,
  addToCart,
  isSearchSubmitted,
  searchResult,
  isLoading,
  prevSnapshot,
  nextSnapshot,
}) => (
  <section className="search-section">
    <div className="search-section-header">
      <TimeTravel prevSnapshot={prevSnapshot} nextSnapshot={nextSnapshot} />
      <SearchBar
        searchText={searchText}
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
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  isSearchSubmitted: PropTypes.bool.isRequired,
  searchResult: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  prevSnapshot: PropTypes.func.isRequired,
  nextSnapshot: PropTypes.func.isRequired,
};

export default Search;

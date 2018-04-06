import React from 'react';

import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

const Search = () => (
  <section className="search-section">
    <SearchBar />
    <SearchResult isNoSearchYet={false} />
  </section>
);

export default Search;

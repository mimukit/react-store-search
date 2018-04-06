import React, { Component } from 'react';

class SearchBar extends Component {
  state = { inputText: '' };
  render() {
    return (
      <div className="search-bar">
        <input type="text" name="searchText" />
        <button>Search</button>
      </div>
    );
  }
}

export default SearchBar;

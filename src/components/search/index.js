import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

const initialState = {
  searchText: '',
  isSearchSubmitted: false,
  searchResult: [],
  isLoading: false,
};

class Search extends Component {
  state = initialState;

  onSearchTextChange = e => {
    const inputValue = e.target.value;

    if (this.state.isSearchSubmitted) {
      this.setState(prevState => ({
        isSearchSubmitted: false,
      }));
    }

    this.setState(prevState => ({
      searchText: inputValue,
    }));
  };

  onSearchSubmit = () => {
    if (this.state.isSearchSubmitted || this.state.searchText.length === 0) {
      return;
    }
    this.setState(prevState => ({
      isSearchSubmitted: true,
      isLoading: true,
    }));

    this.requestData(this.state.searchText)
      .then(res =>
        this.setState(prevState => ({ searchResult: res.hits.hits })),
      )
      .catch(err => console.log(err))
      .finally(() => this.setState(prevState => ({ isLoading: false })));
  };

  requestData = async searchText => {
    console.log('Requesting data to server...');

    const response = await fetch(
      `http://es.backpackbang.com:9200/products/amazon/_search?q=title:${searchText}`,
    );
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <section className="search-section">
        <SearchBar
          onSearchTextChange={this.onSearchTextChange}
          onSearchSubmit={this.onSearchSubmit}
        />
        <SearchResult
          addToCart={this.props.addToCart}
          isSearchSubmitted={this.state.isSearchSubmitted}
          searchResult={this.state.searchResult}
          isLoading={this.state.isLoading}
        />
      </section>
    );
  }
}

Search.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Search;

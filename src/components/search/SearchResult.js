import React, { Component } from 'react';

import ProductCard from './ProductCard';

const renderProducts = () => (
  <div className="search-result">
    <ProductCard
      price="11.50"
      image="https://images-na.ssl-images-amazon.com/images/I/5168%2ByKCPcL._UL900_.jpg"
      title="Test Product"
    />

    <ProductCard
      price="11.50"
      image="https://images-na.ssl-images-amazon.com/images/I/5168%2ByKCPcL._UL900_.jpg"
      title="Test Product"
    />

    <ProductCard
      price="11.50"
      image="https://images-na.ssl-images-amazon.com/images/I/5168%2ByKCPcL._UL900_.jpg"
      title="Test Product"
    />

    <ProductCard
      price="11.50"
      image="https://images-na.ssl-images-amazon.com/images/I/5168%2ByKCPcL._UL900_.jpg"
      title="Test Product"
    />
  </div>
);

class SearchResult extends Component {
  state = { loading: false, searchResult: [1] };
  render() {
    return this.props.isNoSearchYet ? (
      <div className="search-result-empty">
        <p>What'll you buy today?</p>
      </div>
    ) : this.state.loading ? (
      <div className="search-result-empty">
        <p>Loading...</p>
      </div>
    ) : this.state.searchResult.length > 0 ? (
      renderProducts()
    ) : (
      <div className="search-result-empty">
        <p>Sorry, that thing doesn't seem to exist. Try anything else?</p>
      </div>
    );
  }
}

export default SearchResult;

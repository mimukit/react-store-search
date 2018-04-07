import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

const renderProducts = (products, addToCart) => {
  return products.map(product => {
    return (
      <ProductCard
        key={product._id}
        price={product._source.salePrice}
        title={product._source.title}
        image={
          product._source.images[0] || 'https://via.placeholder.com/150x150'
        }
        addToCart={addToCart}
      />
    );
  });
};

const SearchResult = ({
  isSearchSubmitted,
  searchResult,
  isLoading,
  addToCart,
}) => {
  return !isSearchSubmitted && searchResult.length === 0 ? (
    <div className="search-result-empty">
      <p>What'll you buy today?</p>
    </div>
  ) : isLoading ? (
    <div className="search-result-empty">
      <p>Loading...</p>
    </div>
  ) : searchResult.length > 0 ? (
    <div className="search-result">
      {renderProducts(searchResult, addToCart)}
    </div>
  ) : (
    <div className="search-result-empty">
      <p>Sorry, that thing doesn't seem to exist. Try anything else?</p>
    </div>
  );
};

SearchResult.propTypes = {
  isSearchSubmitted: PropTypes.bool.isRequired,
  searchResult: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default SearchResult;

import React from 'react';

import ProductCard from './ProductCard';

const renderProducts = products => {
  return products.map(product => {
    console.log(product);

    return (
      <ProductCard
        key={product._id}
        price={
          typeof product._source.salePrice === 'number'
            ? `$${product._source.salePrice / 100}`
            : 'Unknown'
        }
        title={product._source.title}
        image={
          product._source.images[0] || 'https://via.placeholder.com/150x150'
        }
      />
    );
  });
};

const SearchResult = ({ isSearchSubmitted, searchResult, isLoading }) => {
  return !isSearchSubmitted && searchResult.length === 0 ? (
    <div className="search-result-empty">
      <p>What'll you buy today?</p>
    </div>
  ) : isLoading ? (
    <div className="search-result-empty">
      <p>Loading...</p>
    </div>
  ) : searchResult.length > 0 ? (
    <div className="search-result">{renderProducts(searchResult)}</div>
  ) : (
    <div className="search-result-empty">
      <p>Sorry, that thing doesn't seem to exist. Try anything else?</p>
    </div>
  );
};

export default SearchResult;

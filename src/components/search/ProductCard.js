import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ title, price, image, addToCart }) => (
  <div className="product-card">
    <div className="product-card-header">
      <span className="price-tag">
        {typeof price === 'number' ? `$${(price / 100).toFixed(2)}` : 'Unknown'}
      </span>
      <img src={image} alt={title} />
    </div>
    <div className="product-card-content">
      <p>{title}</p>
      <button
        onClick={() => {
          addToCart({
            title,
            price,
          });
        }}
      >
        + Cart
      </button>
    </div>
  </div>
);

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;

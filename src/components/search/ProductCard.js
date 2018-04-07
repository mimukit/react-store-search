import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ title, price, image, addToCart }) => (
  <div className="product-card">
    <span className="price-tag">
      {typeof price === 'number' ? `$${(price / 100).toFixed(2)}` : 'Unknown'}
    </span>
    <img src={image} alt={title} />
    <div className="product-card-content">
      <h4>
        <b>{title}</b>
      </h4>
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

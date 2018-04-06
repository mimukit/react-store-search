import React from 'react';

const ProductCard = props => (
  <div className="product-card">
    <span className="price-tag">{`${props.price}`}</span>
    <img src={props.image} alt={props.title} />
    <div className="product-card-content">
      <h4>
        <b>{props.title}</b>
      </h4>
      <button>+ Cart</button>
    </div>
  </div>
);

export default ProductCard;

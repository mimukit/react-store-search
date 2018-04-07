import React from 'react';
import PropTypes from 'prop-types';

const SideBarHeader = ({ cartItems, clearCart }) => (
  <div className="sidebar-header">
    <p>
      <span className="sidebar-title">Cart</span>
      <span style={{ float: 'right' }}>
        <button disabled={!cartItems.length} onClick={clearCart}>
          Clear
        </button>
      </span>
    </p>
  </div>
);

SideBarHeader.propTypes = {
  cartItems: PropTypes.array.isRequired,
  clearCart: PropTypes.func.isRequired,
};

export default SideBarHeader;

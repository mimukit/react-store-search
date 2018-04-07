import React from 'react';

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

export default SideBarHeader;

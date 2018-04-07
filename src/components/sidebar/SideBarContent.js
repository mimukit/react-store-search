import React from 'react';
import PropTypes from 'prop-types';

const renderItems = items => {
  return items.map((item, i) => (
    <tr key={`cart-item-${i + 1}`}>
      <td>{`${i + 1}. ${item.title}`}</td>
      <td>{`$${(item.price / 100).toFixed(2)}`}</td>
    </tr>
  ));
};

const SideBarContent = ({ cartItems }) =>
  cartItems.length > 0 ? (
    <div className="sidebar-content-list">
      <table>
        <tbody>{renderItems(cartItems)}</tbody>
      </table>
    </div>
  ) : (
    <div className="sidebar-content-empty">
      <p>You have no item on your cart</p>
    </div>
  );

SideBarContent.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default SideBarContent;

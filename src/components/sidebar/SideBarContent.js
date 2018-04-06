import React from 'react';

const SideBarContent = ({ cartItems }) =>
  cartItems.length > 0 ? (
    <div className="sidebar-content-list">
      <table>
        <tbody>
          <tr>
            <td>1. Product 1</td>
            <td>$11.50</td>
          </tr>
          <tr>
            <td>2. Product 2</td>
            <td>$11.50</td>
          </tr>
        </tbody>
      </table>
    </div>
  ) : (
    <div className="sidebar-content-empty">
      <p>You have no item on your cart</p>
    </div>
  );

export default SideBarContent;

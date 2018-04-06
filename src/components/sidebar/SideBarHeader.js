import React from 'react';

const SideBarHeader = () => (
  <div className="sidebar-header">
    <p>
      <span className="sidebar-title">Cart</span>
      <span style={{ float: 'right' }}>
        <button disabled>Clear</button>
      </span>
    </p>
  </div>
);

export default SideBarHeader;

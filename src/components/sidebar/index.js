import React from 'react';
import SideBarHeader from './SideBarHeader';
import SideBarContent from './SideBarContent';

const SideBar = () => (
  <section className="sidebar-section">
    <SideBarHeader />
    <SideBarContent
      cartItems={[
        {
          title: 'Product 1',
          price: '11.50',
        },
        {
          title: 'Product 2',
          price: '11.50',
        },
        {
          title: 'Product 1',
          price: '11.50',
        },
      ]}
    />
  </section>
);

export default SideBar;

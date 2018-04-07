import React from 'react';
import SideBarHeader from './SideBarHeader';
import SideBarContent from './SideBarContent';

const SideBar = props => (
  <section className="sidebar-section">
    <SideBarHeader {...props} />
    <SideBarContent {...props} />
  </section>
);

export default SideBar;

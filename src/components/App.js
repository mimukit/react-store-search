import React, { Component } from 'react';

import Search from './search';
import SideBar from './sidebar';

class App extends Component {
  state = { text: 'hello' };
  render() {
    return (
      <section className="container">
        <Search />
        <SideBar />
      </section>
    );
  }
}

export default App;

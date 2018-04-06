import React, { Component } from 'react';

class App extends Component {
  state = { text: 'hello' };
  render() {
    return (
      <section className="container">
        <section className="search-section">
          <div className="search-bar">
            <input type="text" name="searchText" />
            <button>Search</button>
          </div>
          <div className="search-result">
            <p>Search result</p>
          </div>
        </section>
        <section className="sidebar-section">
          <div className="sidebar-header">
            <p>Cart</p>
          </div>
          <div className="sidebar-content">
            <p>Product List</p>
          </div>
        </section>
      </section>
    );
  }
}

export default App;

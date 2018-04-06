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
            <div className="product-card">
              <span className="price-tag">$11.50</span>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/5168%2ByKCPcL._UL900_.jpg"
                alt="bag"
              />
              <div className="product-card-content">
                <h4>
                  <b>Product Title</b>
                </h4>
                <button>+ Cart</button>
              </div>
            </div>
            <div className="product-card">
              <span className="price-tag">$11.50</span>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41eQl0UnLCL._UL900_.jpg"
                alt="bag"
              />
              <div className="product-card-content">
                <h4>
                  <b>Product Title</b>
                </h4>
                <button>+ Cart</button>
              </div>
            </div>
            <div className="product-card">
              <span className="price-tag">$11.50</span>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41-Pnu0n0JL._UL900_.jpg"
                alt="bag"
              />
              <div className="product-card-content">
                <h4>
                  <b>Product Title</b>
                </h4>
                <button>+ Cart</button>
              </div>
            </div>
            <div className="product-card">
              <span className="price-tag">$11.50</span>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/5168%2ByKCPcL._UL900_.jpg"
                alt="bag"
              />
              <div className="product-card-content">
                <h4>
                  <b>Product Title</b>
                </h4>
                <button>+ Cart</button>
              </div>
            </div>

            {/* <div className="search-result-empty">
             <p>What'll you buy today?</p> */}
          </div>
        </section>
        <section className="sidebar-section">
          <div className="sidebar-header">
            <p>
              <span className="sidebar-title">Cart</span>
              <span style={{ float: 'right' }}>
                <button disabled>Clear</button>
              </span>
            </p>
          </div>
          {/* <div className="sidebar-content-list">
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
            </table> */}

          <div className="sidebar-content-empty">
            <p>You have no item on your cart</p>
          </div>
        </section>
      </section>
    );
  }
}

export default App;

import React, { Component } from 'react';

import Search from './search';
import SideBar from './sidebar';

const initialState = {
  cartItems: [],
};

class App extends Component {
  state = initialState;

  addToCart = product => {
    this.setState(prevState => ({
      cartItems: [...prevState.cartItems, product],
    }));
  };

  clearCart = () => {
    this.setState(prevState => ({
      cartItems: [],
    }));
  };

  render() {
    return (
      <section className="container">
        <Search addToCart={this.addToCart} />
        <SideBar cartItems={this.state.cartItems} clearCart={this.clearCart} />
      </section>
    );
  }
}

export default App;

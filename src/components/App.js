import React, { Component } from 'react';

import Search from './search';
import SideBar from './sidebar';

const initialState = {
  cartItems: [],
  searchText: '',
  isSearchSubmitted: false,
  searchResult: [],
  isLoading: false,
};

class App extends Component {
  state = initialState;

  addToCart = item => {
    this.setState(prevState => ({
      cartItems: [...prevState.cartItems, item],
    }));
  };

  clearCart = () => {
    this.setState(prevState => ({
      cartItems: [],
    }));
  };

  onSearchTextChange = e => {
    const inputValue = e.target.value;

    if (this.state.isSearchSubmitted) {
      this.setState(prevState => ({
        isSearchSubmitted: false,
      }));
    }

    this.setState(prevState => ({
      searchText: inputValue,
    }));
  };

  onSearchSubmit = () => {
    if (this.state.isSearchSubmitted || this.state.searchText.length === 0) {
      return;
    }
    this.setState(prevState => ({
      isSearchSubmitted: true,
      isLoading: true,
    }));

    this.requestData(this.state.searchText)
      .then(res =>
        this.setState(prevState => ({ searchResult: res.hits.hits })),
      )
      .catch(err => console.log(err))
      .finally(() => this.setState(prevState => ({ isLoading: false })));
  };

  requestData = async searchText => {
    console.log('Requesting data to server...');

    const response = await fetch(
      `http://es.backpackbang.com:9200/products/amazon/_search?q=title:${searchText}`,
    );
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <section className="container">
        <Search
          onSearchTextChange={this.onSearchTextChange}
          onSearchSubmit={this.onSearchSubmit}
          addToCart={this.addToCart}
          isSearchSubmitted={this.state.isSearchSubmitted}
          searchResult={this.state.searchResult}
          isLoading={this.state.isLoading}
        />
        <SideBar cartItems={this.state.cartItems} clearCart={this.clearCart} />
      </section>
    );
  }
}

export default App;

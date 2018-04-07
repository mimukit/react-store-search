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

  snapshots = [];

  snapshotIndex = -1;

  componentDidMount() {
    this.addSnapshot();
  }

  // Snapshot Management Methods

  addSnapshot = () => {
    if (!this.lastSnapshot()) {
      this.snapshots = [
        ...this.snapshots.splice(0, ++this.snapshotIndex),
        this.state,
      ];
    } else {
      this.snapshots = [...this.snapshots, this.state];
      this.snapshotIndex++;
    }
    console.log(this.snapshotIndex, this.snapshots);
  };

  prevSnapshot = () => {
    if (!this.firstSnapshot()) {
      this.snapshotIndex--;

      this.setState(() => ({
        ...this.snapshots[this.snapshotIndex],
      }));
    }
  };

  nextSnapshot = () => {
    if (!this.lastSnapshot()) {
      this.snapshotIndex++;

      this.setState(() => ({
        ...this.snapshots[this.snapshotIndex],
      }));
    }
  };

  firstSnapshot = () => this.snapshotIndex === 0;

  lastSnapshot = () => this.snapshotIndex === this.snapshots.length - 1;

  // App Management Methods

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

  addToCart = item => {
    this.setState(
      prevState => ({
        cartItems: [...prevState.cartItems, item],
      }),
      this.addSnapshot,
    );
  };

  clearCart = () => {
    this.setState(
      prevState => ({
        cartItems: [],
      }),
      this.addSnapshot,
    );
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
      .finally(() =>
        this.setState(prevState => ({ isLoading: false }), this.addSnapshot),
      );
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
          searchText={this.state.searchText}
          isSearchSubmitted={this.state.isSearchSubmitted}
          searchResult={this.state.searchResult}
          onSearchTextChange={this.onSearchTextChange}
          onSearchSubmit={this.onSearchSubmit}
          addToCart={this.addToCart}
          isLoading={this.state.isLoading}
          prevSnapshot={this.prevSnapshot}
          nextSnapshot={this.nextSnapshot}
        />
        <SideBar cartItems={this.state.cartItems} clearCart={this.clearCart} />
      </section>
    );
  }
}

export default App;

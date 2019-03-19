import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';

import { getProducts } from './actions/products';
import { getCategories } from './actions/categories';


import { connect } from 'react-redux';

import Products from './components/Products'


class App extends Component {

  componentDidMount() {
    const { products, categories } = this.props;

    if (!categories.fetched) {
      this.props.getCategories();
    }
    
    if (!products.fetched) {
      this.props.getProducts();
    }

    
  }

  render() {
    const { products, categories } = this.props;
    if(products.products !== null &&
      categories.categories !== null) {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to my shop</h1>
          </header>
          <h1>Categories</h1>
          <ul>
              {this.props.categories.categories.data.map((category) => (
                <li key={category.id}>{category.name}</li>
              ))}
            </ul>
          <Products />
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to my shop</h1>
          </header>
          <h1>Categories</h1>
          <ul>
              Loading
            </ul>
          <Products />
        </div>
      );
    }
  }
}



const mapStateToProps = ({ products, categories }) => ({
  products,
  categories
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getProducts,
      getCategories
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);

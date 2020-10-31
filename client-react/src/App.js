import React, { Component } from 'react';
import './App.css';

import Products from './components/products';
import PersonList from './components/Person/PersonList';
import PersonInput from './components/Person/PersonInput';
import ProductReview from './components/ProductReview';



class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductReview uri="http://localhost:3001/products" />
        <PersonInput />
        <PersonList />
        <Products uri="http://localhost:3001/products" />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Checkout from './screens/Checkout';

import "./App.css";

import Bootnav from "./screens/Bootnav";
import Navy from "./screens/Navy";
import Home from "./screens/Home";
import About from "./screens/About";
import Shop from "./screens/Shop";

import Products from "./components/Product/products";
import ProductReview from "./components/Product/ProductReview";
import PersonList from "./components/Person/PersonList";
import PersonInput from "./components/Person/PersonInput";
import PersonUpdate from "./components/Person/PersonUpdate";
import PersonDelete from "./components/Person/PersonDelete";
import ItemDetailAndCart from "./components/Product/ItemDetailAndCart";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Bootnav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/shop" component={Shop} />
            <Route path="/shop/:id" component={ItemDetailAndCart} />

            <ProductReview path="/reviews" uri="http://localhost:3001/products" />
            <Products path="/products" uri="http://localhost:3001/products" />
            <Route exact path="/checkout" component={Checkout} />
            <PersonList path="/users" />
            <PersonInput />
            <PersonUpdate />
            <PersonDelete />
            
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}


export default App;

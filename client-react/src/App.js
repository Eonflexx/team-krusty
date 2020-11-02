import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import Nav from  "./Screens/Nav";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Shop from "./Screens/Shop";

import ItemDetail from "./components/ItemDetail";
import Products from "./components/products";
import PersonList from "./components/Person/PersonList";
import PersonInput from "./components/Person/PersonInput";
import ProductReview from "./components/ProductReview";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
          <ProductReview path="/reviews" uri="http://localhost:3001/products" />
          <Products path="/products" uri="http://localhost:3001/products" />
          <PersonList path="/users" />
          <PersonInput />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;

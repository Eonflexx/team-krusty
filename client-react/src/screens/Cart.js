import React from "react";
import Topic from "../components/Topic";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";

function Cart({ match }) {
  return (
    <div>
      <h1>Cart Page</h1>
      <hr />
      <p><b>Checkout: </b>Customer Details</p>
      <label>Name: </label><input></input><br />
      <label>Address: </label><input></input><br />
      <label>Click button to accept charges: </label><button>Submit</button>
    </div>
  );
}

export default Cart;
import React from 'react';

import axios from 'axios';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productData: [] };
    this.productName = React.createRef();
    this.productPrice = React.createRef();
  }

  fetchProductData = () => {
    let encodedURI = window.encodeURI(this.props.uri);
    return axios.get(encodedURI).then(response => this.setState({ productData: response.data }));
      };

  componentDidMount() {
    this.fetchProductData();
  }

  addProduct = () => {
    let encodedURI = window.encodeURI(this.props.uri);
    return axios.post(encodedURI, { name: this.productName.current.value, price: this.productPrice.current.value }).then(response => {
      // refresh the data
      this.fetchProductData();
      // empty the input
      this.productName.current.value = "";
      this.productPrice.current.value = 0.00;

    });
  };

  render() {
    console.log(this.state.productData);
    if (this.state.productData.length === 0) {
      return <div>Failed to fetch data from server</div>;
    }
    const products = this.state.productData.map(product => (
      <div key={product.name}>
        <em>{product.name}</em>: ${product.price} <button type="button" className="btn btn-danger">Delete</button>
      </div>
    ));
    return (
      <div>
        <h3>List of products (React, added this code)</h3>
        <input type="text" placeholder="New Product" ref={this.productName} />
        <input type="number" placeholder="Given Price" ref={this.productPrice} />
        <button type="button" className="btn btn-primary" onClick={this.addProduct}>add</button>
        {products}
      </div>);
  }
}

export default Products;
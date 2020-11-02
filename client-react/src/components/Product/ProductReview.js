import React, { useState, useEffect } from 'react';
import axios from 'axios';

class ProductReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productData: [] };
    this.productName = React.createRef();
    this.review = React.createRef();
  }

  fetchProductData = () => {
    let encodedURI = window.encodeURI(this.props.uri);
    return axios.get(encodedURI).then(response => this.setState({ productData: response.data }));
      };

  componentDidMount() {
    this.fetchProductData();
  }

  submitReview = (id) => {
    let encodedURI = window.encodeURI(this.props.uri);
    return axios.post(encodedURI + `/${id}`, { name: this.productName.current.value, description: this.review.current.value }).then(response => {
      // refresh the data
      this.fetchProductData();
      alert("succesful insert");
      // empty the input
      this.productName.current.value = "";
      this.review.current.value = "";
    });
  };

  deleteProduct = (id) => {
    let url = `http://localhost:3001/products/delete/${id}`;
    console.log(id)
    return axios.delete(url).then(response => {
      // refresh the data
      this.fetchProductData();
    });
  };

  render() {
    console.log(this.state.productData);
    if (this.state.productData.length === 0) {
      return <div>Failed to fetch data from server</div>;
    }

    return (
    <div>
      <h1>CRUD PRODUCT REVIEW</h1>
      
      <div className="form">
        <label>Product Name:</label>
        <input type="text" id="MyInput" name="productName"  ref={this.productName} />
        <label>Review:</label>
        <input type="text" id="MyInput" name="review" ref={this.review} />
        
        <button onClick={this.submitReview}>Submit</button>

        {this.state.productData.map(product => (
        <div className="MyCard" key={product.id} >
            <h1><em>{product.name}</em>:{product.id} ${product.price}</h1>
            <p>{product.description}</p>

            <button onClick={() => {this.deleteProduct(product.id)}}>Delete</button> 
            <input type="text" id="updateInput"/> 
            <button>Update</button>
        </div>
        ))}
        </div>

    </div>);
  }
}

export default ProductReview;

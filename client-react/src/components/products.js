import React from 'react';

import axios from 'axios';

class Products extends React.Component {
  state = {
    productData: []
  };

  fetchProductData = () => {
    var encodedURI = window.encodeURI(this.props.uri);
    return axios.get(encodedURI).then(response => {
      this.setState(() => {
        return {
          productData: response.data
        };
      });
    });
  };

  componentDidMount() {
    this.fetchProductData();
  }

  render() {
    console.log(this.state.productData);
    if (this.state.productData.length === 0) {
      return <div>Failed to fetch data from server</div>;
    }
    const products = this.state.productData.map(product => (
      <div key={product.name}>
        <em>{product.name}</em>: ${product.price}
      </div>
    ));
    return <div>{products}</div>;
  }
}

export default Products;
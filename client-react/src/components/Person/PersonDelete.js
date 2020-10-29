import React from 'react';
import axios from 'axios';

export default class PersonDelete extends React.Component {
  state = {
    id: 0,
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      id: this.state.id
    };
    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="number" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}
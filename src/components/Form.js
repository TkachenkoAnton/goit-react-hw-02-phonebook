import React, { Component } from "react";
import shortid from "shortid";

class Form extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    const contactId = shortid.generate();
    this.props.onSubmit({ name: value, id: contactId });
    this.reset();
  };

  reset = () => {
    this.setState({ value: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Name</h3>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;

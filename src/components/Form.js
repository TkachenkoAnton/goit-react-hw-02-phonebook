import React, { Component } from "react";
import shortid from "shortid";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;
    const { onSubmit } = this.props;
    const contactId = shortid.generate();

    onSubmit({ id: contactId, name, number });
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    const formId = shortid.generate();

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={formId}>
          <h3>Name</h3>
          <input
            type="text"
            name="name"
            id={formId}
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor={formId}>
          <h3>Number</h3>
          <input
            type="tel"
            name="number"
            id={formId}
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;

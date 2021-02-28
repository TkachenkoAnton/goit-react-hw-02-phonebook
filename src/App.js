import React, { Component } from "react";
import Form from "./components/Form";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  getAndAddContactNameAndId = (newContact) => {
    this.setState(({ contacts }) => {
      return { contacts: [newContact, ...contacts] };
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.getAndAddContactNameAndId} />
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}

export default App;

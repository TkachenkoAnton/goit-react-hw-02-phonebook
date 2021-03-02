import React, { Component } from "react";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import SearchForm from "./components/SearchForm";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  getAndAddContact = (newContact) => {
    if (this.passNewContact(newContact)) {
      this.setState(({ contacts }) => {
        return { contacts: [newContact, ...contacts] };
      });
    }
  };

  passNewContact = (newContact) => {
    const { contacts } = this.state;
    let pass = true;

    contacts.forEach(({ name }) => {
      if (name.toLowerCase() === newContact.name.toLowerCase()) {
        alert(`${newContact.name} is already in your contacts list`);
        pass = false;
      }
    });

    return pass;
  };

  setFilterState = (e) => {
    const { value } = e.currentTarget;

    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizeQuery = filter.toLowerCase();
    const afterSearchContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeQuery)
    );

    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.getAndAddContact} />
        <ContactList contacts={afterSearchContacts}>
          <SearchForm filter={filter} onChange={this.setFilterState} />
        </ContactList>
      </>
    );
  }
}

export default App;

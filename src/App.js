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
    if (this.isContactExist(newContact)) {
      this.setState(({ contacts }) => {
        return { contacts: [newContact, ...contacts] };
      });
    }
  };

  deleteContact = (e) => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(({ id }) => id !== e.target.id),
      };
    });
  };

  isContactExist = (newContact) => {
    const { contacts } = this.state;
    let contactExist = true;

    contacts.forEach(({ name }) => {
      if (name.toLowerCase() === newContact.name.toLowerCase()) {
        alert(`${newContact.name} is already in contacts`);
        contactExist = false;
      }
    });

    return contactExist;
  };

  setFilterState = (e) => {
    const { value } = e.currentTarget;

    this.setState({ filter: value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeQuery = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeQuery)
    );
  };

  render() {
    const { filter } = this.state;
    const afterSearchContacts = this.filterContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.getAndAddContact} />
        <ContactList
          contacts={afterSearchContacts}
          onClick={this.deleteContact}
        >
          <SearchForm filter={filter} onChange={this.setFilterState} />
        </ContactList>
      </>
    );
  }
}

export default App;

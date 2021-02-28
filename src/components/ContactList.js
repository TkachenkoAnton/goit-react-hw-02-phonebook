import React, { Component } from "react";

class ContactList extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default ContactList;

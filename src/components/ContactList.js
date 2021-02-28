import React, { Component } from "react";

class ContactList extends Component {
  render() {
    const { contacts, children } = this.props;

    return (
      <>
        <h2>Contacts</h2>
        <>{children}</>
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ContactList;

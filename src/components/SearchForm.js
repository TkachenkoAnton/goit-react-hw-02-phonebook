import React, { Component } from "react";

class SearchForm extends Component {
  render() {
    const { filter, onChange } = this.props;

    return (
      <form>
        <label>
          <h3>Find contacts by name</h3>
          <input type="text" value={filter} onChange={onChange} />
        </label>
      </form>
    );
  }
}

export default SearchForm;

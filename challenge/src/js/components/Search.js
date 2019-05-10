import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchFor } from '../actions/index';

// const mapStateToProps = state => {
//   return {
//     typedValue: state.typedValue
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    searchFor: val => dispatch(searchFor(val))
  };
};

class Search extends Component {
  constructor() {
    super();
    this.handleInputValueChange = this.handleInputValueChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      inputValue: ''
    };
  }

  handleInputValueChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.searchFor(this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          placeholder="Search for..."
          value={this.state.inputValue}
          onChange={this.handleInputValueChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Search);

/* REACT */
import React, { Component } from 'react'

/* REDUX */
import { connect } from 'react-redux'

/* HELPERS */
import axios from 'axios';

/* ACTIONS */
// import { search } from '../actions/index'

// const mapDispatchToProps = dispatch => {
//   return {
//     search: val => dispatch(search(val))
//   }
// }

/* REDUCERS / STATE */
// const mapStateToProps = state => {
//   return {
//     typedValue: state.typedValue
//   };
// };

class Search extends Component {
  constructor() {
    super()
    // this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      inputValue: ''
    }
  }

  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    /* SEARCH */
    // this.props.search(this.state.inputValue)
    console.log(this.state.inputValue)

    /* RESET FORM */
    this.setState({
      inputValue: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search for a Pokémon by name or type (e.g.: 'bulbasaur' or 'flying')..."
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

// export default connect(
//   null,
//   mapDispatchToProps
// )(Search)

export default Search

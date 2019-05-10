/* REACT */
import React, { Component } from 'react'

/* REDUX */
import { connect } from 'react-redux'

/* HELPERS */
import axios from 'axios';

/* ACTIONS */
import { updateData } from '../reducers/searchResults/action-creators'

/* REDUCERS / STATE */
// const mapStateToProps = state => {
//   return {
//     typedValue: state.typedValue
//   };
// };

const API_URL = 'https://pokeapi.co/api/v2'

const slugify = (string) => string
const search = (what, query) => axios.get(`${API_URL}/${what}/${slugify(query)}`)

class Search extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
  }

  resetInput = () => {
    this.setState({ inputValue: '' })
  }

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    const { inputValue } = this.state
    const { updateData } = this.props

    /* Search for a Pokémon by name */
    search('pokemon', inputValue)
      .then(res => updateData(res.data))
      /* If query doesn't match with a Pokémon name, try to match with a Pokémon type */
      .catch(() => {
        search('type', inputValue)
          .then(res => updateData(res.data.pokemon))
          /* If query doesn't match name or type, update reducer with an object containing an error message */
          .catch((err) => updateData({ error: `Couldn't find a Pokémon or type that matches "${inputValue}"` }))
      })
      /* Reset input after requests */
      .then(() => this.resetInput())
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

export default connect(
  null,
  { updateData }
)(Search)

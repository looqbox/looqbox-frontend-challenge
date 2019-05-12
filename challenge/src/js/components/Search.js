/* REACT */
import React, { Component } from 'react'

/* REDUX */
import { connect } from 'react-redux'

/* ROUTER */
import history from '../router/history'

/* HELPERS */
import { search } from '../helpers'

/* ACTIONS */
import { updateData, updateShowCount, updateIsSearching } from '../reducers/searchResults/action-creators'

/* SEARCH */
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
    const { updateData, updateShowCount, updateIsSearching } = this.props

    /* Return to main route (if not already) */
    if (history.location.pathname !== '/') history.push('/')

    /* Set isSearching to true (to show 'loading') */
    updateIsSearching(true)

    /* Reset showCount to 20 */
    updateShowCount(20)

    /* Search for a Pokémon by name */
    search('pokemon', inputValue)
      .then(res => updateData(inputValue, res.data))
      /* If query doesn't match with a Pokémon name, try to match with a Pokémon type */
      .catch(() => {
        search('type', inputValue)
          .then(res => updateData(inputValue, res.data.pokemon))
          /* If query doesn't match name or type, update reducer with an object containing an error message */
          .catch(() => updateData(inputValue, { error: `Couldn't find a Pokémon or type that matches "${inputValue}"` }))
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
          required
        />
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default connect(
  null,
  { updateData, updateShowCount, updateIsSearching }
)(Search)

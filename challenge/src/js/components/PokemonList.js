/* REACT */
import React, { Component } from 'react'

/* REDUX */
import { connect } from 'react-redux'

/* REDUCERS / STATE */
const mapStateToProps = state => {
  return {
    searchResults: state.searchResults
  }
}

class PokemonList extends Component {
  renderSearchResults = () => {
    const { searchResults } = this.props

    if (!searchResults) return null

    /* If searchResults has the prop 'error' (couldn't match Pokémon name or type), show error message */
    if (searchResults.error)
      return <p>{searchResults.error}</p>

    /* If searchResults is an array (searched for Pokémon type), ... */
    if (Array.isArray(searchResults))
      return searchResults.map(item => <p>{item.pokemon.name}</p>)

    /* If conditions above doesn't match (searched for Pokémon name), ... */
    return <p>{searchResults.name}</p>
  }

  render() {
    return (
      this.renderSearchResults()
    )
  }
}

export default connect(
  mapStateToProps
)(PokemonList)

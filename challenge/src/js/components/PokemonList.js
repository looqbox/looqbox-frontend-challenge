/* REACT */
import React, { Component } from 'react'

/* REDUX */
import { connect } from 'react-redux'

/* HELPERS */
import uuidv from 'uuid';

/* REDUCERS / STATE */
const mapStateToProps = state => {
  return {
    searchResults: state.searchResults
  }
}

class PokemonList extends Component {
  renderSearchResults = () => {
    const { data } = this.props.searchResults

    /* Return null if data obj doesn't exist */
    if (!data) return null

    /* If data has the prop 'error' (couldn't match Pokémon name or type), show error message */
    if (data.error)
      return <p>{data.error}</p>

    /* If data is an array (searched for Pokémon type), ... */
    if (Array.isArray(data))
      return data.map(item => <p key={uuidv()}>{item.pokemon.name}</p>)

    /* If conditions above doesn't match (searched for Pokémon name), ... */
    return <p>{data.name}</p>
  }

  renderResultHeadline = () => {
    const { query, data } = this.props.searchResults

    /* Return null if data obj doesn't exist or has the prop 'error' */
    if (!data || data.error) return null

    return <h2>Showing results for "{query}" ({data.length || 1})</h2>
  }

  render() {
    return (
      <>
        {this.renderResultHeadline()}
        {this.renderSearchResults()}
      </>
    )
  }
}

export default connect(
  mapStateToProps
)(PokemonList)

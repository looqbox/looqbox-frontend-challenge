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

/* ACTIONS */
import { updateShowCount } from '../reducers/searchResults/action-creators'

/* POKÉMON LIST */
class PokemonList extends Component {
  renderResults = () => {
    const { data, showCount } = this.props.searchResults

    /* Return null if data obj doesn't exist */
    if (!data) return null

    /* If data has the prop 'error' (means that couldn't match Pokémon name or type), show error message */
    if (data.error)
      return <p>{data.error}</p>

    /* If data is an array (means that searched for a Pokémon type), ... */
    if (Array.isArray(data)) {
      const list =
        data
          .slice(0, showCount)
          .map(item => <p key={uuidv()}>{item.pokemon.name}</p>)

      /* Check if all pokémons are already rendered on screen, and if not, enable 'show more' button */
      return showCount < data.length
        ? list.concat(<button key={uuidv()} onClick={() => this.props.updateShowCount(showCount + 20)}>Show more...</button>)
        : list
    }

    /* If conditions above doesn't match (means that searched for a Pokémon name), ... */
    return <p>{data.name}</p>
  }

  renderResultsHeadline = () => {
    const { query, data } = this.props.searchResults

    /* Return null if data obj doesn't exist or has the prop 'error' */
    if (!data || data.error) return null

    /* Check if this.props.searchResults.showCount is equal or higher than data length, and if true, set showCount (* not the reducer prop) to equal data length */
    const showCount =
      this.props.searchResults.showCount >= data.length
        ? data.length
        : this.props.searchResults.showCount

    return data.length
      ? <h2>Showing results for "{query}" ({showCount} of {data.length})</h2>
      : <h2>Showing results for "{query}" (1 of 1)</h2>
  }

  render() {
    return (
      <>
        {this.renderResultsHeadline()}
        {this.renderResults()}
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  { updateShowCount }
)(PokemonList)

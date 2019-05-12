/* REACT */
import React, { Component } from 'react'

/* REDUX */
import { connect } from 'react-redux'

/* HELPERS */
import uuidv from 'uuid'

/* COMPONENTS */
import ResultItem from './ResultItem'
import Loading from './Loading'

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
    if (data.error) return <p className="error">{data.error}</p>

    /* If data is an array (means that searched for a Pokémon type), render Pokémon list and 'show more' button (if needed) */
    if (Array.isArray(data)) {
      const list =
        data
          .slice(0, showCount)
          .map(item => <ResultItem data={item.pokemon || item} key={uuidv()} />)

      /* Check if all pokémons are already rendered on screen, and if not, enable 'show more' button */
      return showCount < data.length
        ? list.concat(<button className="button button--lg" key={uuidv()} onClick={() => this.props.updateShowCount(showCount + 20)}>Show more...</button>)
        : list
    }

    /* If conditions above doesn't match (means that searched for a Pokémon name), render searched Pokémon */
    return <ResultItem data={data} />
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

    /* Check if 'query' is empty (showing random Pokémon) */
    if (!query) return <h2>Showing random Pokémon</h2>

    /* Check data length to see if is a single result or not */
    return data.length
      ? <h2>Showing results for "{query}" ({showCount} of {data.length})</h2>
      : <h2>Showing results for "{query}" (1 of 1)</h2>
  }

  render() {
    const { isSearching } = this.props.searchResults

    return (
      <>
        {isSearching ? null : this.renderResultsHeadline()}

        <div className="results">
          {isSearching ? <Loading /> : this.renderResults()}
        </div>
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  { updateShowCount }
)(PokemonList)

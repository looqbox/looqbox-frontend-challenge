/* REACT */
import React, { Component } from 'react'

/* REDUX */
import { connect } from 'react-redux'

/* ROUTER */
import history from '../router/history'

/* HELPERS */
import { getRandom, getRandomNumber } from '../helpers'

/* ACTIONS */
import { updateData, updateIsSearching } from '../reducers/searchResults/action-creators'

class GetRandomPokemon extends Component {
  componentDidMount = () => {
    if (history.location.pathname === '/') this.getRandomPokemon()
  }

  /* Get random Pokémon based on 'offset' param (limited in 20 items) */
  getRandomPokemon = () => {
    const { updateData, updateIsSearching } = this.props

    /* Set isSearching to true (to show loading bar) */
    updateIsSearching(true)

    /* If not in main route, redirect to it */
    if (history.location.pathname !== '/') history.push('/')

    getRandom(getRandomNumber(0, 787))
      .then(res => updateData('', res.data.results))
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center flex-column">
          <p className="text">OR...</p>
          <button type="button" className="button button--lg button--random" onClick={this.getRandomPokemon}>Get random Pokémon</button>
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  { updateData, updateIsSearching }
)(GetRandomPokemon)

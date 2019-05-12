/* REACT */
import React, { Component } from 'react'

/* ROUTER */
import { Link } from 'react-router-dom'
import history from '../router/history'

/* HELPERS */
import { search, getEvolutions } from '../helpers'
import uuidv from 'uuid'
import axios from 'axios'

/* COMPONENTS */
import Loading from './Loading'

/* POKÉMON */
class Pokemon extends Component {
  constructor() {
    super()
    this.state = {
      pokemon: null,
      evolutions: null
    }
  }

  componentDidMount = () => {
    this.getPokemonData()
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.location.pathname !== this.props.location.pathname) this.getPokemonData()
  }

  getPokemonData = () => {
    search('pokemon', this.props.match.params.name)
      .then(res => this.setState({ pokemon: res.data }))
      .catch(() => history.push('/'))
      .then(() => {
        if (!this.state.pokemon) return
        search('pokemon-species', this.state.pokemon.id)
          .then(res => axios.get(res.data.evolution_chain.url))
          .then(res => this.setState({ evolutions: getEvolutions(res.data.chain) }))
      })
  }

  renderEvolutionChain = () => {
    const { evolutions } = this.state

    return (
      <div className="pokemon__group">
        <h2>Evolution chain:</h2>
        {evolutions.map((specie, i) => <Link to={`./${specie}`} className="button button--sm" key={uuidv()}>{i + 1}. {specie} (+)</Link>)}
      </div>
    )
  }

  render = () => {
    const { pokemon, evolutions } = this.state

    return (
      pokemon
        ? (
          <div className="pokemon">
            <button type="button" className="button button--sm" onClick={history.goBack}>Go back</button>
            <h1 className="pokemon__name">{pokemon.name}</h1>

            <div className="pokemon__group">
              <h2>Type(s):</h2>
              {pokemon.types.map(item => <p key={uuidv()}>{item.type.name}</p>)}
            </div>

            <div className="pokemon__group">
              <h2>Abilities:</h2>
              {pokemon.abilities.map(item => <p key={uuidv()}>{item.ability.name}</p>)}
            </div>

            <div className="pokemon__group">
              <h2>Stats:</h2>
              {pokemon.stats.map(item => <p key={uuidv()}>{item.stat.name}: {item.base_stat}</p>)}
            </div>

            {evolutions ? this.renderEvolutionChain() : null}
          </div>
        )
        : <Loading />
    )
  }
}

export default Pokemon

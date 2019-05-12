/* REACT */
import React, { Component } from 'react'

/* ROUTER */
import { Link } from 'react-router-dom'
import history from '../router/history'

/* HELPERS */
import { search, getEvolutions, unslugify } from '../helpers'
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

  componentDidUpdate = prevProps => {
    /* Update Pokémon data on route change */
    if (prevProps.location.pathname !== this.props.location.pathname) this.getPokemonData()
  }

  getPokemonData = () => {
    /* Search for a Pokémon based on route name */
    search('pokemon', this.props.match.params.name)
      /* Set Pokémon data with request response */
      .then(res => this.setState({ pokemon: res.data }))
      /* If route doesn't match a Pokémon name, return to main route */
      .catch(() => history.push('/'))
      .then(() => {
        if (!this.state.pokemon || this.state.pokemon.id > 807) return
        /* If Pokémon matches, and 'id' is under or equal 807 (last Pokémon with evolution chain), request its evolution chain */
        search('pokemon-species', `${this.state.pokemon.id}`)
          .then(res => axios.get(res.data.evolution_chain.url))
          .then(res => this.setState({ evolutions: getEvolutions(res.data.chain) }))
      })
  }

  /* Render the Pokémon evolution chain */
  renderEvolutionChain = () => {
    const { evolutions } = this.state

    return (
      <div className="pokemon__group">
        <h2>Evolution chain:</h2>
        {evolutions.map((specie, i) => <Link to={`./${specie}`} className="button button--sm" key={uuidv()}>{i + 1}. {unslugify(specie)} (+)</Link>)}
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
            <h1 className="pokemon__name">#{pokemon.id} {unslugify(pokemon.name)}</h1>

            {/* Render Pokémon image */}
            {pokemon.sprites.front_default ? (<img src={pokemon.sprites.front_default} alt={unslugify(pokemon.name)} />) : null}

            {/* Render Pokémon type(s) */}
            <div className="pokemon__group">
              <h2>Type(s):</h2>
              {pokemon.types.map(item => <p key={uuidv()}>{unslugify(item.type.name)}</p>)}
            </div>

            {/* Render Pokémon abilities */}
            <div className="pokemon__group">
              <h2>Abilities:</h2>
              {pokemon.abilities.map(item => <p key={uuidv()}>{unslugify(item.ability.name)}</p>)}
            </div>

            {/* Render Pokémon stats */}
            <div className="pokemon__group">
              <h2>Stats:</h2>
              {pokemon.stats.map(item => <p key={uuidv()}>{unslugify(item.stat.name)}: {item.base_stat}</p>)}
            </div>

            {/* Render Pokémon evolution chain */}
            {evolutions ? this.renderEvolutionChain() : null}
          </div>
        )
        : <Loading />
    )
  }
}

export default Pokemon

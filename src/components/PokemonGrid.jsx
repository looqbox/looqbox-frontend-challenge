import React from 'react'
import PokemonItem from './PokemonItem'
import '../App.css'

const PokemonGrid = ({ pokemons }) => {
    return (
            <section className="cards">
                {pokemons.map(pokemon => (
                    <PokemonItem key={pokemon} pokemon={pokemon} />
                ))}
            </section>
        )
}

export default PokemonGrid

import React from 'react'
import './PokemonItem.css'


const PokemonItem = ({pokemon}) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt="Pokemon" style={{marginTop: '25%'}}/>
                </div>
                <div className="card-back">
                    <h1>{pokemon.name}</h1>
                    <ul>
                        <li>
                            <strong>Height:</strong> {pokemon.height}
                        </li>
                        <li>
                            <strong>Weight:</strong> {pokemon.weight}
                        </li>
                        <li>
                            <strong>Ability:</strong> {pokemon.abilities[0].ability.name}
                        </li>
                        <li>
                            <strong>Species:</strong> {pokemon.species.name}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PokemonItem
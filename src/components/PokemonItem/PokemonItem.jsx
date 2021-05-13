import React from 'react'
import './PokemonItem.css'


const PokemonItem = ({pokemon}) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <h2>{`${pokemon.name}`}</h2>
                </div>
            </div>
        </div>
    )
}

export default PokemonItem
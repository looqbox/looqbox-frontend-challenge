import React from 'react'
import '../App.css'

const PokemonItem = ({pokemon}) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <h2>{pokemon}</h2>
                </div>
            </div>
        </div>
    )
}

export default PokemonItem
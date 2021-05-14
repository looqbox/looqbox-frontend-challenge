import React, { createContext, useContext, useState } from 'react'

const PokemonsContext = createContext()

export function PokemonsProvider({ children }) {

    const [pokemons, setPokemons] = useState([])
    const [listedPokemons, setListedPokemons] = useState([])

    return (
        <PokemonsContext.Provider value={{ pokemons, setPokemons, listedPokemons, setListedPokemons }}>
            {children}
        </PokemonsContext.Provider>
    )
}

export function usePokemons() {
    const context = useContext(PokemonsContext)
    return context
}

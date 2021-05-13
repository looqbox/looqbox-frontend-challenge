import React, { createContext, useContext, useState } from 'react'

const PokemonsContext = createContext()

export function PokemonsProvider({ children }) {

    const [pokemons, setPokemons] = useState([])

    return (
        <PokemonsContext.Provider value={{ pokemons, setPokemons }}>
            {children}
        </PokemonsContext.Provider>
    )
}

export function usePokemons() {
    const context = useContext(PokemonsContext)
    return context
}

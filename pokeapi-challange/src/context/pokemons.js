import React, { createContext, useContext, useState } from 'react'

const PokemonsContext = createContext()

export function PokemonsProvider({ children }) {

    const [isActivePokemon, setIsActivePokemon] = useState([])

    return (
        <PokemonsContext.Provider value={{ isActivePokemon, setIsActivePokemon }}>
            {children}
        </PokemonsContext.Provider>
    )
}

export function usePokemons() {
    const context = useContext(PokemonsContext)
    return context
}

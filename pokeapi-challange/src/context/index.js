import React from 'react'
import { PokemonsProvider, usePokemons } from './pokemons'

function Context({ children }) {
    
    return (
      <PokemonsProvider>
          {children}
      </PokemonsProvider>
    )
}

export default Context

export {
  usePokemons,
}
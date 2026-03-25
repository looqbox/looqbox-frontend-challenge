import { describe, it, expect } from 'vitest';
import pokemonReducer, { resetToInitial, setIsTyping } from './pokemonSlice';
import type { PokemonState } from '../types/pokemon-state';

describe('Pokemon Slice - Reducers', () => {
  const mockPokemon = { 
    id: 4, 
    name: 'charmander', 
    types: [], 
    stats: [], 
    sprites: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
    } 
  };
  
  const initialState: PokemonState = {
    pokemonList: [mockPokemon],
    initialPokemonList: [mockPokemon],
    loading: false,
    error: null,
    currentPage: 2,
    isTyping: true,
  };

  it('deve alternar o estado de isTyping corretamente', () => {
    const state = pokemonReducer(initialState, setIsTyping(false));
    expect(state.isTyping).toBe(false);
  });

  it('deve resetar para o estado inicial (Charmander) e limpar erros do Pikachu ao disparar resetToInitial', () => {
    const alteredState: PokemonState = {
      ...initialState,
      pokemonList: [],
      error: 'Pokémon não encontrado',
      currentPage: 10
    };

    const state = pokemonReducer(alteredState, resetToInitial());
    
    expect(state.pokemonList).toEqual(initialState.initialPokemonList);
    expect(state.pokemonList[0].name).toBe('charmander');
    
    expect(state.error).toBeNull();
    
    expect(state.currentPage).toBe(1);
  });
});
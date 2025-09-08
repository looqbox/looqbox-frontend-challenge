import { describe, it, expect, beforeEach } from 'vitest';
import { usePokemonStore } from '../models/zustand/pokemon.store';
import type { PokemonListResponseProps } from '../models/types/pokemon-list';

type ResultProps = PokemonListResponseProps['results'][0];

beforeEach(() => {
  usePokemonStore.setState({
    litsPokemon: [],
    pokemon: null,
    pokemonFromCompare: null,
  });
});

describe('Pokemon Store', () => {
  it('deve iniciar com estado vazio', () => {
    const state = usePokemonStore.getState();
    expect(state.litsPokemon).toEqual([]);
    expect(state.pokemon).toBeNull();
    expect(state.pokemonFromCompare).toBeNull();
  });

  it('setPokemon deve atualizar pokemon', () => {
    usePokemonStore.getState().setPokemon('pikachu');
    expect(usePokemonStore.getState().pokemon).toBe('pikachu');
  });

  it('setPokemonFromCompare deve atualizar pokemonFromCompare', () => {
    usePokemonStore.getState().setPokemonFromCompare('bulbasaur');
    expect(usePokemonStore.getState().pokemonFromCompare).toBe('bulbasaur');
  });

  it('setLitsPokemon deve substituir a lista', () => {
    const updatedList: ResultProps[] = [
      { name: 'charmander', url: '/poke/4', image: '/src/img.test' },
    ];
    usePokemonStore.getState().setLitsPokemon(updatedList);
    expect(usePokemonStore.getState().litsPokemon).toEqual(updatedList);
  });

  it('appendLitsPokemon deve adicionar sem duplicar', () => {
    const first: ResultProps = { name: 'squirtle', url: '/poke/7', image: '/src/img.test' };
    const second: ResultProps = { name: 'pikachu', url: '/poke/25', image: '/src/img.test' };

    usePokemonStore.getState().appendLitsPokemon([first]);
    usePokemonStore.getState().appendLitsPokemon([first, second]);

    expect(usePokemonStore.getState().litsPokemon).toEqual([first, second]);
  });
});

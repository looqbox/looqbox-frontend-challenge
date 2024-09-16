import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonState {
  pokemon: any;
  pokedex: any[];
  pokelist: any[];
  isModalOpen: boolean;
  isAddPokemon: boolean;
  filteredPokelist: any[];
}

const savePokedexToLocalStorage = (pokedex: any[]) => {
  localStorage.setItem('pokedex', JSON.stringify(pokedex));
};

const loadPokedexFromLocalStorage = (): any[] => {
  const pokedexData = localStorage.getItem('pokedex');
  return pokedexData ? JSON.parse(pokedexData) : [];
};

const initialState: PokemonState = {
  pokemon: null,
  pokedex: loadPokedexFromLocalStorage(),
  pokelist: [],
  isModalOpen: false,
  isAddPokemon: true,
  filteredPokelist: [],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemon(state, action: PayloadAction<any>) {
      state.pokemon = action.payload;
    },
    setPokelist(state, action: PayloadAction<any[]>) {
      state.pokelist = action.payload;
      state.filteredPokelist = state.pokelist.filter(
        (pokemon) => !state.pokedex.some(
          (pokedexPokemon) => pokedexPokemon.name === pokemon.name
        )
      );
    },
    addToPokedex(state, action: PayloadAction<any>) {
      const isAlreadyInPokedex = state.pokedex.some(
        (pokedexPokemon) => pokedexPokemon.id === action.payload.id
      );

      if (!isAlreadyInPokedex) {
        state.pokedex.push(action.payload);
        state.isAddPokemon = true;
        state.isModalOpen = true;

        savePokedexToLocalStorage(state.pokedex);

        state.filteredPokelist = state.pokelist.filter(
          (pokemon) => !state.pokedex.some(
            (pokedexPokemon) => pokedexPokemon.name === pokemon.name
          )
        );
      }
    },
    removeFromPokedex(state, action: PayloadAction<any>) {
      state.pokedex = state.pokedex.filter(p => p.id !== action.payload.id);
      state.isAddPokemon = false;
      state.isModalOpen = true;

      savePokedexToLocalStorage(state.pokedex);

      state.filteredPokelist = state.pokelist.filter(
        (pokemon) => !state.pokedex.some(
          (pokedexPokemon) => pokedexPokemon.name === pokemon.name
        )
      );
    },
    closeModal(state) {
      state.isModalOpen = false;
    },
    openModal(state) {
      state.isModalOpen = true;
    },
  },
});

export const { setPokemon, setPokelist, addToPokedex, removeFromPokedex, closeModal, openModal } = pokemonSlice.actions;
export default pokemonSlice.reducer;

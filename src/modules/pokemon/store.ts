import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemonList: [],
    pokemonDetail: {}
  },
  reducers: {
    setList: (state, action: PayloadAction<any>) => {
      state.pokemonList = action.payload;
    },
    setPokemon: (state, action: PayloadAction<any>) => {
      state.pokemonDetail = action.payload;
    },
    removePokemon: (state) => {
      state.pokemonDetail = {};
    }
  }
});

export const { setList, setPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
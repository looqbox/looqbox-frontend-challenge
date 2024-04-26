import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PokemonProps } from '../../shared/service.interface';

interface InitialState {
  currentList: PokemonProps[];
}

const initialState: InitialState = {
  currentList: [] as PokemonProps[],
};

const allPokemonsSlice = createSlice({
  name: 'allPokemons',
  initialState,
  reducers: {
    addList: (state, { payload }: PayloadAction<PokemonProps[]>) => {
      state.currentList = [...initialState.currentList, ...payload];
      return;
    },
  },
});

export default allPokemonsSlice.reducer;

export const { addList } = allPokemonsSlice.actions;

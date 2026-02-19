import type { RootState } from "../index";

export const selectPokemonList = (state: RootState) => state.pokemon.list;
export const selectTotal = (state: RootState) => state.pokemon.total;
export const selectPage = (state: RootState) => state.pokemon.page;
export const selectPageSize = (state: RootState) => state.pokemon.pageSize;
export const selectSelectedType = (state: RootState) => state.pokemon.selectedType;
export const selectTypeList = (state: RootState) => state.pokemon.typeList;

export const selectSearchValue = (state: RootState) => state.pokemon.searchValue;
export const selectSearchedPokemon = (state: RootState) => state.pokemon.searchedPokemon;
export const selectIsSearching = (state: RootState) => state.pokemon.isSearching;

export const selectLoading = (state: RootState) => state.pokemon.loading;
export const selectError = (state: RootState) => state.pokemon.error;

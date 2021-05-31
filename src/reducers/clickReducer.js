import { POKEMON_GET_API } from "../actions/pokemonAction";

const initialState = {
  pokemon: {},
  pokemonDescricao: {},
  pokemonEntry: "",
};

export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case POKEMON_GET_API:
      return {
        ...state,
        pokemon: action.value,
        pokemonDescricao: action.descricao,
        pokemonEntry: action.pokemonEntry,
      };
    default:
      return state;
  }
};

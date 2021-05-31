import axios from "axios";

export const POKEMON_SET_NAME = "POKEMON_SET_NAME";
export const POKEMON_GET_API = "POKEMON_GET_API";

const URL = `https://pokeapi.co/api/v2/pokemon/`;
const URL_descricao = `https://pokeapi.co/api/v2/pokemon-species/`; // url secundaria para descricao complementar do pokemon

export const setPokemonName = (e) => {
  const value = e.target.value;

  return {
    type: POKEMON_SET_NAME,
    value: value,
  };
};

export const searchButton = (value) => {
  return async (dispatch) => {
    // evita lowercase() caso value seja um numero

    if (typeof value === "string") {
      value = value.toLowerCase();
    }
    try {
      const response = await axios.get(URL + value);
      if (response && response.data) {
        const descricao = await axios.get(URL_descricao + value);

        // para garantir que pokemon entry seja em inglês

        let n = 0;
        while (descricao.data.flavor_text_entries[n].language.name !== "en") {
          n++;
        }

        const pokemonEntry = descricao.data.flavor_text_entries[n].flavor_text;

        //

        dispatch({
          type: POKEMON_GET_API,
          value: response.data,
          descricao: descricao.data,
          pokemonEntry: pokemonEntry,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

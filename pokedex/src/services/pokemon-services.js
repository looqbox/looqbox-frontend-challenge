import API from "./config-services";

const POKEMON_ENDPOINT = {
  LIST_POKEMON: "pokemon/",
  LIST_POKEMON_SPECIES: "pokemon-species/",
  LIST_TRAINER_POKEMON: "https://pokeres.bastionbot.org/images/pokemon/",
  LIST_KANTO_POKEMON: "pokemon?limit=151",
  LIST_JOHTO_POKEMON: "pokemon?limit=100&offset=151",
};

const pokeService = {
  get: async (id) => {
    try {
      let response = await API.get(POKEMON_ENDPOINT.LIST_POKEMON + id);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  getSpecies: async (id) => {
    try {
      let response = await API.get(
        `${POKEMON_ENDPOINT.LIST_POKEMON_SPECIES + id}`
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
  getAllKanto: async () => {
    try {
      let response = await API.get(POKEMON_ENDPOINT.LIST_KANTO_POKEMON);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  getAllJohto: async () => {
    try {
      let response = await API.get(POKEMON_ENDPOINT.LIST_JOHTO_POKEMON);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  getTrainerPokemons: async (id) => {
    try {
      let response = await API.get(POKEMON_ENDPOINT.LIST_TRAINER_POKEMON + id);
      return response.data;
    } catch (error) {
      return error;
    }
  },
};

export default pokeService;

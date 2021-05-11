import api from "../../services/api";

export const getPokemons = (offset: number) => {
  const info = Promise.all([
    api.get(`/pokemon?offset=${offset}`, {
      validateStatus: function (status) {
        return status < 501; // Resolve only if the status code is less than 500
      },
    }),
  ]).then(async (responses) => {
    const [PushPokemonInformation] = responses;
    const results = await PushPokemonInformation.data;
    return results;
  });
  return info;
};

export const getPokemonInformation = (link: string) => {
  var indexEndpoint = link.indexOf("pokemon");
  var endpoint = link.slice(indexEndpoint, link.length - 1);

  const info = Promise.all([
    api.get(`${endpoint}`, {
      validateStatus: function (status) {
        return status < 501; // Resolve only if the status code is less than 500
      },
    }),
  ]).then(async (responses) => {
    const [PushPokemonInformation] = responses;
    const results = await PushPokemonInformation.data;
    return results;
  });
  return info;
};

export const searchPokemon = (query: string) => {
  const info = Promise.all([
    api.get(`pokemon/${query}`, {
      validateStatus: function (status) {
        return status < 501; // Resolve only if the status code is less than 500
      },
    }),
  ]).then(async (responses) => {
    const [PushPokemonInformation] = responses;
    const results = await PushPokemonInformation.data;
    return results;
  });
  return info;
};

import api from "./api";

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

export const getDescription = (query: string) => {
  const info = Promise.all([
    api.get(`characteristic/${query}`, {
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
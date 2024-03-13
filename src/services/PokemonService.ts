import api from "./api";

export const getPokemons = async () => {
  const res = await api.get("pokemon");
  return res.data.results;
};

export const getPokemonByName = async (name: string) => {
  const res = await api.get(`pokemon/${name}`);
  return res.data;
};

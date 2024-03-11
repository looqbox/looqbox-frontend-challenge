import api from "./api";
    
export const getPokemons = async () => {
  try {
    const res = await api.get("pokemon");
    return res.data.results;
  } catch (error) {
    // Handle error...
  }
};

export const getPokemonByName = async (name: string) => {
  try {
    const res = await api.get(`pokemon/${name}`);
    return res.data;
  } catch (error) {
    // Handle error...
  }
};
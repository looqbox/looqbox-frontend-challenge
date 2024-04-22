import axios from "axios";
import PokeAPI from "../../models/PokeAPI";

export const getLocations = async (url: string): Promise<PokeAPI> => {
  const response = await axios.get(url);

  return response.data;
};

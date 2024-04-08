import { Metadata } from "@/@types/services";
import { api } from "@/services/api";
import { ENDPOINTS } from "@/services/endpoints";

type Type = {
  name: string;
  url: string;
};

export const getPokemonTypes = async () => {
  const { data } = await api.get(ENDPOINTS.TYPE);
  return data as Metadata<Type>;
};

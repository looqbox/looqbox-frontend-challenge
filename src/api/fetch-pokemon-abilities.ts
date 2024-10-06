import { Ability } from "@/@types/Ability";
import { api } from "@/lib/axios";

export async function fetchPokemonAbility(abilityName: string) {
  const result = await api.get<Ability>(`/ability/${abilityName}`);

  return result.data;
}

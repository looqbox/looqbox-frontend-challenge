import { Ability } from "@/@types/Ability";
import { api } from "@/lib/api";

export async function fetchPokemonAbility(
  abilityName: string
): Promise<Ability> {
  return api(`/ability/${abilityName}`).then((result) => result.json());
}

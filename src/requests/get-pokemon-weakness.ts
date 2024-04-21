import { DefinedPokemonType } from '@/@types/pokemon';
import { api } from '@/lib/axios';

type Damage = {
  name: DefinedPokemonType;
  url: string;
};

type WeaknessResponse = {
  name: DefinedPokemonType;
  weaknesses: DefinedPokemonType[];
};

export async function getPokemonWeakness(
  url: string
): Promise<WeaknessResponse> {
  const typeId = url.split('/').reverse()[1];

  const { data } = await api.get(`/type/${typeId}`);
  const weaknesses = data.damage_relations.double_damage_from.map(
    (weakness: Damage) => weakness.name
  );

  return {
    name: data.name,
    weaknesses,
  };
}

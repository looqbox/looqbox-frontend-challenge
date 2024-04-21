import { api } from '@/lib/axios';

type EffectEntry = {
  effect?: string;
  language: { name: string };
};

export type AbilityDetail = {
  name: string;
  effect: string;
};

export async function getPokemonAbilityDetail(
  url: string
): Promise<AbilityDetail> {
  const abilityId = url.split('/').reverse()[1];

  const { data } = await api.get(`/ability/${abilityId}`);
  const effect = data.effect_entries.find(
    (entry: EffectEntry) => entry.language.name === 'en'
  )?.effect;
  return {
    name: data.name,
    effect: effect || 'No description available',
  };
}

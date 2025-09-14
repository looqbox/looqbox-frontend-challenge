import { getData } from '../services/configAxios';

type SpeciesResponse = {
  flavor_text_entries: { flavor_text: string; language: { name: string } }[];
};

export async function getPokemonDescription(idOrName: number | string) {
  const data = await getData<SpeciesResponse>(`/pokemon-species/${idOrName}`);

  const entry =
    data.flavor_text_entries.find((e) => e.language.name === 'pt') ||
    data.flavor_text_entries.find((e) => e.language.name === 'en');

  return entry ? entry.flavor_text.replace(/\s+/g, ' ').trim() : '';
}

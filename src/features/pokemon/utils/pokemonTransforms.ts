import type { EvolutionChainNode, PokemonSpeciesResponse } from '../api/pokemonApi';

export type PokemonSpeciesStored = {
  description: string;
  captureRate: number;
  habitat: string | null;
  evolutionChainUrl: string;
};

function cleanFlavorText(text: string) {
  return text.replaceAll('\f', ' ').replaceAll('\n', ' ').replace(/\s+/g, ' ').trim();
}

export function toSpeciesStored(species: PokemonSpeciesResponse): PokemonSpeciesStored {
  const entry =
    species.flavor_text_entries.find((e) => e.language.name === 'en') ??
    species.flavor_text_entries[0];

  return {
    description: entry ? cleanFlavorText(entry.flavor_text) : '',
    captureRate: species.capture_rate,
    habitat: species.habitat?.name ?? null,
    evolutionChainUrl: species.evolution_chain.url,
  };
}

/**
 * Converte a árvore de evolução em uma lista linear (DFS) sem repetir nomes.
 * Isso te dá: ["bulbasaur", "ivysaur", "venusaur"] (ou listas mais complexas em pokémons ramificados).
 */
export function flattenEvolutionNames(root: EvolutionChainNode): string[] {
  const out: string[] = [];
  const seen = new Set<string>();

  function walk(node: EvolutionChainNode) {
    const name = node.species.name.toLowerCase();
    if (!seen.has(name)) {
      out.push(name);
      seen.add(name);
    }
    for (const next of node.evolves_to) walk(next);
  }

  walk(root);
  return out;
}

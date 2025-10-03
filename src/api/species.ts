import { api } from '../utils/api'
import type { Pokemon } from './pokemon'

export type PokemonSpecies = {
  base_happiness: number
  capture_rate: number
  color: { name: string; url: string }
  evolution_chain: { url: string }
  flavor_text_entries: {
    flavor_text: string
    language: { name: string; url: string }
    version: { name: string; url: string }
  }[]
  genera: { genus: string; language: { name: string } }[]
  habitat: { name: string; url: string } | null
  is_legendary: boolean
  is_mythical: boolean
  is_baby: boolean
}

type EvolutionChain = {
  chain: EvolutionNode
}

type EvolutionNode = {
  species: { name: string; url: string }
  evolves_to: EvolutionNode[]
}

export const getPokemonSpecies = async (url: string) => {
  const { data } = await api.get<PokemonSpecies>(url)
  return data
}

export const getPokemonSpeciesEvolution = async (
  species: PokemonSpecies,
): Promise<Pokemon[]> => {
  if (!species.evolution_chain?.url) return []

  const { data } = await api.get<EvolutionChain>(species.evolution_chain.url)

  const evolutions: string[] = []

  const traverse = (node: EvolutionNode) => {
    evolutions.push(node.species.name)

    if (node.evolves_to.length > 0) {
      node.evolves_to.forEach((child) => traverse(child))
    }
  }

  traverse(data.chain)

  const pokemons = await Promise.all(
    evolutions.map(async (name) => {
      const { data: details } = await api.get<Pokemon>(`pokemon/${name}`)
      return details
    }),
  )

  return pokemons
}

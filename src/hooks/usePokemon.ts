import { api } from '../services/api'
import type { Pokemon, Type } from '../types/pokemon'

export interface Flavor {
  flavor_text_entries: FlavorTextEntry[]
}

export interface FlavorTextEntry {
  flavor_text: string
}

export interface DamageRelations {
  double_damage_from: DoubleDamageFrom[]
}

export interface DoubleDamageFrom {
  name: string
}

export interface DamageRelationGeneral {
  damage_relations: DamageRelations
}

export function usePokemon() {
  const getPokemonDetails = async (id: string) => {
    try {
      const response = await api.get<Pokemon>(`/${id}`)
      return response.data
    } catch (error) {
      return
    }
  }

  const getPokemonDescription = async (id: string) => {
    try {
      const response = await api.get<Flavor>(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`,
      )

      return response.data.flavor_text_entries[0].flavor_text.replaceAll(
        /\f/g,
        ' ',
      )
    } catch (error) {
      return
    }
  }

  const getPokemonWeaknesses = async (pokemonTypes: Type[]) => {
    try {
      const responses = await Promise.all(
        pokemonTypes.map((type) =>
          api.get<DamageRelationGeneral>(type.type.url),
        ),
      )

      const result = responses.map(
        (response) => response.data.damage_relations.double_damage_from,
      )

      const weaknesses: string[] = []

      result.forEach((item) => {
        item.forEach((type) => {
          if (!weaknesses.includes(type.name)) {
            weaknesses.push(type.name)
          }
        })
      })

      return weaknesses
    } catch (error) {
      return []
    }
  }

  return {
    getPokemonDetails,
    getPokemonDescription,
    getPokemonWeaknesses,
  }
}

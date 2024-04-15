import { AxiosError } from 'axios'
import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { Pokemon } from 'global/interfaces/Pokemon.interface'

import axiosInstance from '../api'
import {
  GetPokemonsParams,
  GetPokemonsResponse,
  PokemonApiResponse,
  PokemonDetailsApiResponse,
  PokemonMove,
  PokemonStat,
  PokemonType
} from './pokemon.service.dto'

async function getPokemonByID(ID: string) {
  try {
    const response = await axiosInstance.get(`pokemon/${ID}/`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export async function getPokemons({
  limit,
  offset
}: GetPokemonsParams): Promise<Pokemon[]> {
  try {
    const response = await axiosInstance.get(
      `pokemon?limit=${limit || 50}&offset=${offset || 1}`
    )

    const data: PokemonApiResponse = response.data

    const pokemons: Pokemon[] = await Promise.all(
      data.results.map(async (result) => {
        const pokemonID = result.url
          .split('/')
          .at(result.url.split('/').length - 2)

        const pokemonDetails: PokemonDetailsApiResponse = await getPokemonByID(
          pokemonID as string
        )

        const types = pokemonDetails.types.map(
          (type: PokemonType) => type.type.name
        )

        const moves = pokemonDetails.moves.map(
          (move: PokemonMove) => move.move.name
        )

        const stats = pokemonDetails.stats.map((stat: PokemonStat) => ({
          stat: stat.stat.name,
          value: stat.base_stat
        }))

        const pokemon: Pokemon = {
          types,
          stats,
          moves,
          name: result.name,
          ID: pokemonID as string,
          weight: pokemonDetails.weight,
          height: pokemonDetails.height,
          image: pokemonDetails.sprites.other.dream_world.front_default
        }

        return pokemon
      })
    )

    return pokemons
  } catch (error) {
    console.error(error)
    return []
  }
}

export function useGetPokemons(
  params: GetPokemonsParams
): UseQueryResult<GetPokemonsResponse[], AxiosError> {
  return useQuery({
    queryKey: ['pokemons', params],
    queryFn: () => getPokemons(params)
  })
}

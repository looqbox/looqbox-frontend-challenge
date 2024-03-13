import axios from 'axios'
import { type ResultPokemonList, type PokemonData, type PokemonSpecie } from '../../types/pokemon.types'

export async function getPokemonList ({ pageParam }: { pageParam: string }): Promise<ResultPokemonList> {
  const { data } = await axios.get<ResultPokemonList>(`${pageParam}`)

  const urls = data.results.map(data => data.url)

  const fetches = urls.map(async url => await axios.get(url))

  const results = await Promise.all(fetches)
  const resultsData = results.map(({ data }) => data as PokemonData)

  return {
    results: data.results,
    pokemons: resultsData,
    count: data.count,
    next: data.next,
    previous: data.previous
  }
}

export async function getPokemonData (search?: string): Promise<PokemonData> {
  if (!search) return {} as PokemonData

  const { data } = await axios.get<PokemonData>(`https://pokeapi.co/api/v2/pokemon/${search}`)

  await new Promise((resolve) => setTimeout(resolve, 2000))

  return data
}

export async function getPokemonSpecie (id?: string): Promise<PokemonSpecie> {
  if (!id) return {} as PokemonSpecie

  const { data } = await axios.get<PokemonSpecie>(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)

  const englishTextEntries = data.flavor_text_entries.filter(
    entry => entry.language.name === 'en'
  ).map(value => value)

  const englishGenera = data.genera.filter(
    genera => genera.language.name === 'en'
  ).map(value => value)

  return {
    ...data,
    flavor_text_entries: englishTextEntries,
    genera: englishGenera
  }
}

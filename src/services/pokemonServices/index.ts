import axios from 'axios'
import { type IResultPokemonList, type IPokemonData, type IPokemonSpecie } from '../../types/Pokemon.types'

export async function getPokemonList ({ pageParam }: { pageParam: string }): Promise<IResultPokemonList> {
  const { data } = await axios.get<IResultPokemonList>(`${pageParam}`)

  const urls = data.results.map(data => data.url)

  const fetches = urls.map(async url => await axios.get(url))

  const results = await Promise.all(fetches)
  const resultsData = results.map(({ data }) => data as IPokemonData)

  return {
    results: data.results,
    pokemons: resultsData,
    count: data.count,
    next: data.next,
    previous: data.previous
  }
}

export async function getPokemonData (search?: string): Promise<IPokemonData> {
  if (!search) return {} as IPokemonData

  const { data } = await axios.get<IPokemonData>(`https://pokeapi.co/api/v2/pokemon/${search}`)

  return data
}

export async function getPokemonSpecie (id?: string): Promise<IPokemonSpecie> {
  if (!id) return {} as IPokemonSpecie

  const { data } = await axios.get<IPokemonSpecie>(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)

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

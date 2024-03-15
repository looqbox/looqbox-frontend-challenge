import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import pokeball from '@/assets/pokeball.png'
import { env } from '@/env'

import { Loader } from '../loader'
import { PokemonCard } from './pokemon-card'

export const PokemonList = () => {
  /**
   * 1) Create a function that will iterate between the url of each item in the array returned from the API.
   * 2) Then, fetch those individual pokemon info and save it in the state.
   */
  const handlePokemonList = () => {
    const endpoints = [] as string[]

    for (let index = 1; index < 41; index++) {
      endpoints.push(`${env.VITE_API_BASE_URL}/pokemon/${index}/`)
    }

    const fetchPokemonData = async () => {
      const responses = await axios.all(
        endpoints.map((endpoint) => axios.get(endpoint))
      )

      const pokemonData = responses.map((response) => response.data)
      return pokemonData
    }

    return fetchPokemonData()
  }

  const { data: pokemonList, isLoading } = useQuery({
    queryKey: ['pokemonList'],
    queryFn: handlePokemonList,
  })

  return (
    <section className="mx-auto w-full max-w-[1400px]">
      <div className="flex w-full justify-end pb-4">
        <p className="flex items-center justify-end gap-1">
          <img src={pokeball} height={48} width={48} alt="" />

          <span className="flex-1 text-2xl font-semibold tracking-tight">
            1302
          </span>
        </p>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 tablet:grid-cols-3 xl:grid-cols-4">
          {pokemonList?.map((listItem) => {
            return <PokemonCard key={crypto.randomUUID()} data={listItem} />
          })}
        </div>
      )}
    </section>
  )
}

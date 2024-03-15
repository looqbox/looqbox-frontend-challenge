import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

import { getPokemon } from '@/api/getPokemon'
import { PokemonDetails } from '@/components/internal/pokemon-details/index'
import { Loader } from '@/components/loader'

type UseParamsTypes = {
  id: string
}

export const Pokemon = () => {
  const { id } = useParams<UseParamsTypes>()

  const { data: pokemon } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => getPokemon(`/pokemon/${id}`),
  })

  const pokemonData = pokemon?.data
  const flavorTextUrl = pokemonData?.species.url

  return (
    <>
      <Helmet title={pokemonData?.name} />

      {pokemonData ? (
        <PokemonDetails.Root>
          <div className="col-span-3 flex flex-col gap-4 rounded-lg border border-white p-4">
            <PokemonDetails.Name value={pokemonData.name} />

            <PokemonDetails.Description value={flavorTextUrl} />

            <PokemonDetails.Charts value={pokemonData.stats} />

            <PokemonDetails.Moves value={pokemonData.moves} />
          </div>{' '}
          <div className="col-span-1 flex flex-col justify-center gap-8 rounded-lg border border-white p-4">
            <img
              src={pokemonData?.sprites.other.home.front_default}
              height={384}
              width={384}
              className="self-center object-contain"
              alt=""
            />

            <PokemonDetails.Stats value={pokemonData.stats} />

            <PokemonDetails.Types value={pokemonData.types} />

            <PokemonDetails.Abilities value={pokemonData?.abilities} />
          </div>
        </PokemonDetails.Root>
      ) : (
        <Loader />
      )}
    </>
  )
}

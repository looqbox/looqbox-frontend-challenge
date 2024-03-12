import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

import { getPokemon } from '@/api/getPokemon'
import { Loader } from '@/components/loader'
import { PokemonDetails } from '@/components/pokemon-details/index'

import missingno from '../assets/Missingno_RB.png'

type UseParamsTypes = {
  id: string
}

export const Pokemon = () => {
  const { id } = useParams<UseParamsTypes>()

  const { data: pokemon, isLoading } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => getPokemon(id),
  })

  return (
    <>
      <Helmet title={pokemon?.data.name} />

      {isLoading ? (
        <Loader />
      ) : (
        <PokemonDetails.Root>
          <div className="col-span-1 flex flex-col justify-center gap-8 rounded-lg border-2 p-4">
            <img
              src={pokemon?.data.sprites.other.home.front_default || missingno}
              className="h-96 w-96 object-contain"
              alt=""
            />

            <PokemonDetails.Stats stats={pokemon!.data.stats} />
            <PokemonDetails.Types types={pokemon!.data.types} />
            <PokemonDetails.Abilities abilities={pokemon!.data.abilities} />
          </div>

          <div className="col-span-3 flex flex-col gap-4 rounded-lg border-2 p-4">
            <PokemonDetails.Name name={pokemon?.data.name || 'missingno'} />
            <PokemonDetails.Description description={pokemon?.data.name} />
            <PokemonDetails.Moves moves={pokemon!.data.moves} />
          </div>
        </PokemonDetails.Root>
      )}
    </>
  )
}

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

  const { data: pokemon, isLoading } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => getPokemon(`/pokemon/${id}`),
  })

  const flavor_text = pokemon?.data.species.url
  const route = flavor_text?.split('v2')[1]

  const { data: pokemonDescription } = useQuery({
    queryKey: ['pokemonDescription', route],
    queryFn: () => getPokemon(route),
  })

  // console.log('pokemon.data.stats is: ', pokemon?.data.stats)
  // console.log('pokemonDescription.data is: ', pokemonDescription?.data)

  return (
    <>
      <Helmet title={pokemon?.data.name} />

      {isLoading ? (
        <Loader />
      ) : (
        <PokemonDetails.Root>
          <div className="col-span-3 flex flex-col gap-4 rounded-lg border border-white p-4">
            <PokemonDetails.Name name={pokemon?.data.name} />

            <PokemonDetails.Description
              description={[
                pokemonDescription?.data.flavor_text_entries[0].flavor_text,
                pokemonDescription?.data.flavor_text_entries[2].flavor_text,
              ]}
            />

            <PokemonDetails.Charts stats={pokemon?.data.stats} />

            <PokemonDetails.Moves moves={pokemon?.data.moves} />
          </div>{' '}
          <div className="col-span-1 flex flex-col justify-center gap-8 rounded-lg border border-white p-4">
            <img
              src={pokemon?.data.sprites.other.home.front_default}
              height={384}
              width={384}
              className="self-center object-contain"
              alt=""
            />

            <PokemonDetails.Stats stats={pokemon!.data.stats} />

            <PokemonDetails.Types types={pokemon!.data.types} />

            <PokemonDetails.Abilities abilities={pokemon!.data.abilities} />
          </div>
        </PokemonDetails.Root>
      )}
    </>
  )
}

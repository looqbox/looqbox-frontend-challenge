import { useGetEvolutionChain } from './useEvolutionChain'
import { useGetPokemon } from './usePokemon'
import { useGetSpecies } from './useSpecies'
import { useGetTypes } from './useTypes'

function usePokemonDetails(id: number, navigate: (path: string) => void) {
  const {
    data: pokeData,
    isFetching: pokeLoading,
    error: pokeError
  } = useGetPokemon(id)
  const {
    data: speciesData,
    isFetching: speciesLoading,
    error: speciesError
  } = useGetSpecies(id)
  const {
    data: typesData,
    isFetching: typesLoading,
    error: typesError
  } = useGetTypes(pokeData?.types[0].type.name || '')
  const {
    data: evolutionChainData,
    isFetching: evolutionChainLoading,
    error: evolutionChainError
  } = useGetEvolutionChain(speciesData?.evolution_chain.url || '')

  const isLoading =
    pokeLoading || speciesLoading || typesLoading || evolutionChainLoading
  const isError = pokeError || speciesError || typesError || evolutionChainError

  if (isError?.message?.includes('404')) navigate('/not-found')

  return {
    pokeData,
    speciesData,
    typesData,
    evolutionChainData,
    isLoading,
    isError
  }
}

export default usePokemonDetails

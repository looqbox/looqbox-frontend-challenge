import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { type IPokemonData } from '../../../../types/Pokemon.types'
import { useQuery } from '@tanstack/react-query'
import { getPokemonData, getPokemonSpecie } from '../../../../services/pokemonServices'
import { message } from 'antd'

export default function usePokemonDetailsController () {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const currentPokemon: IPokemonData = location.state ? location.state.pokemon : null

  const { data: pokemonFetched, error, isFetching } = useQuery({
    queryKey: ['pokemonDetails', id],
    queryFn: async () => await getPokemonData(id?.toLowerCase()),
    staleTime: 180000,
    enabled: !currentPokemon && !!id
  })

  const pokemon = currentPokemon || pokemonFetched

  const { data: pokemonSpecie, isFetching: isFetchingSpecies } = useQuery({
    queryKey: ['pokemonDetails', 'pokemonSpecies', id],
    queryFn: async () => await getPokemonSpecie(id?.toLowerCase()),
    staleTime: 180000,
    enabled: !!pokemon && !!id
  })

  if (!id || error) {
    void message.error('Was not possible to fetch this pokemon data.')
    navigate('/')
  }

  return {
    pokemon,
    pokemonSpecie,
    isFetching,
    isFetchingSpecies
  }
}

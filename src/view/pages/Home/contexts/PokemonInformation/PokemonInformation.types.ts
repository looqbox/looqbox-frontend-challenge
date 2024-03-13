import { type InfiniteData } from '@tanstack/react-query'
import { type PokemonData, type ResultPokemonList } from '../../../../../types/pokemon.types'

export interface IPokemonInformationContext {
  pokemonListData: InfiniteData<ResultPokemonList, unknown> | undefined
  isFetching: boolean
  isFetchingNextPage: boolean
  filteredPokemonList: PokemonData[]
  isError: boolean
  ref: React.LegacyRef<HTMLDivElement> | undefined
  isLoadingSearch: boolean
  handleSearchClear: () => void
  handleSearch: (search: string) => Promise<void>
  inView: boolean
}

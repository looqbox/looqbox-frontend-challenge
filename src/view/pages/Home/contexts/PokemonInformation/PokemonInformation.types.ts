import { type InfiniteData } from '@tanstack/react-query'
import { type IPokemonData, type IResultPokemonList } from '../../../../../types/Pokemon.types'

export interface IPokemonInformationContext {
  pokemonListData: InfiniteData<IResultPokemonList, unknown> | undefined
  isFetching: boolean
  isFetchingNextPage: boolean
  filteredPokemonList: IPokemonData[]
  isError: boolean
  ref: React.LegacyRef<HTMLDivElement> | undefined
  isLoadingSearch: boolean
  handleSearchClear: () => void
  handleSearch: (search: string) => Promise<void>
  inView: boolean
}

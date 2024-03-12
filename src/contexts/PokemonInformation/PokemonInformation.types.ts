import { InfiniteData } from "@tanstack/react-query"
import { PokemonData, ResultPokemonList } from "../../types/pokemon.types"

export interface IPokemonInformationContext {
    pokemonListData: InfiniteData<ResultPokemonList, unknown> | undefined,
    isFetching: boolean,
    isFetchingNextPage: boolean,
    filteredPokemonList: PokemonData[],
    ref: React.LegacyRef<HTMLDivElement> | undefined,
    isLoadingSearch: boolean,
    handleSearchClear(): void,
    handleSearch(search: string): Promise<void>,
    inView: boolean
}
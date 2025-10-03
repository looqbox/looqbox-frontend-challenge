import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useAppDispatch, useAppSelector } from './redux'
import { getPokemonPagination, type PokemonResponse } from '../api/pokemon'
import { setCurrentPage, setItemsPerPage } from '../store/pokemonSlice'

export function usePokemonList() {
  const dispatch = useAppDispatch()
  const { currentPage, itemsPerPage, searchTerm } = useAppSelector(
    (state) => state.pokemon,
  )

  const query = useQuery<PokemonResponse, Error>({
    queryKey: ['pokemons', currentPage, itemsPerPage, searchTerm],
    queryFn: () =>
      getPokemonPagination(
        (currentPage - 1) * itemsPerPage,
        itemsPerPage,
        searchTerm || undefined,
      ),
    placeholderData: keepPreviousData,
  })

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page))
  }

  const handlePageSizeChange = (size: number) => {
    dispatch(setItemsPerPage(size))
  }

  return {
    ...query,
    currentPage,
    itemsPerPage,
    handlePageChange,
    handlePageSizeChange,
  }
}

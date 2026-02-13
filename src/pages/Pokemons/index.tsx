import { useEffect } from 'react'
import { PokemonsList } from '../../components/PokemonsList'
import { SearchBar } from '../../components/SearchBar'
import { useAppDispatch, useAppSelector } from '../../store'

import { Pagination } from 'antd'
import { useSearchParams } from 'react-router'
import { loadPokemonPaginatedList } from '../../store/slices/pokemon'

export function Pokemons() {
  const dispatch = useAppDispatch()
  const isSearching = useAppSelector((state) => state.pokemons.isSearching)
  const total = useAppSelector((state) => state.pokemons.baseData.count)

  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = Number(searchParams.get('page')) || 1

  const limit = 16
  const offset = (currentPage - 1) * limit

  const handleChangePage = (page: number) => {
    setSearchParams({ page: String(page) })
  }

  useEffect(() => {
    dispatch(loadPokemonPaginatedList({ limit, offset }))
  }, [dispatch, offset])

  return (
    <main className='w-full min-h-dvh flex flex-col gap-4 px-[5%] pt-22 bg-blue-50'>
      <SearchBar />
      <PokemonsList />
      <div className='w-full flex justify-center mb-6'>
        <Pagination
          current={currentPage}
          total={total}
          pageSize={limit}
          showSizeChanger={false}
          showLessItems
          onChange={handleChangePage}
          disabled={isSearching}
        />
      </div>
    </main>
  )
}

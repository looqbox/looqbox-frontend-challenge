import { Pagination } from 'antd'
import { PokemonGrid } from '../components/PokemonGrid'
import { LoadingIcon } from '../components/icons/LoadingIcon'
import { PokemonSearch } from '../components/PokemonSearch'
import { StateMessage } from '../components/StateMessage'
import { usePokemonList } from '../hooks/usePokemonList'
import type { PokemonResponse } from '../api/pokemon'

function Home() {
  const {
    data,
    isLoading,
    isFetching,
    error,
    currentPage,
    itemsPerPage,
    handlePageChange,
    handlePageSizeChange,
  } = usePokemonList()

  return (
    <div className="flex flex-col flex-1">
      <div className="flex justify-center items-center mt-4">
        <img src="/logo-looqdex.png" className="max-h-24" />
      </div>

      <div className="w-full flex justify-center items-center my-6">
        <PokemonSearch redirectToHome={false} />
      </div>

      <HandleState
        loading={isLoading}
        data={data}
        error={error}
        fetching={isFetching}
      />

      <div className="mt-8 flex justify-center">
        <Pagination
          responsive
          current={currentPage}
          total={data?.totalCount ?? 1}
          pageSize={itemsPerPage}
          showSizeChanger
          onChange={(page) => handlePageChange(page)}
          onShowSizeChange={(_, size) => handlePageSizeChange(size)}
        />
      </div>
    </div>
  )
}

const HandleState = ({
  loading,
  fetching,
  data,
  error,
}: {
  loading: boolean
  fetching: boolean
  data: PokemonResponse | undefined
  error: Error | null
}) => {
  if (loading || fetching) {
    return (
      <div className="flex-1 flex items-center justify-center flex-col gap-4">
        <LoadingIcon />
        <p className="text-gray-600 font-semibold">Loading Pokémons...</p>
      </div>
    )
  }

  if (error) {
    return (
      <StateMessage
        img="../../public/error-icon.png"
        alt="Error Icon"
        text="Error loading Pokémons"
        color="text-[#a40000]"
      />
    )
  }

  if (data?.pokemons?.length === 0) {
    return (
      <StateMessage
        img="../../public/not-found-icon.png"
        alt="Not Found Icon"
        text="No Pokémon found"
        color="text-[#6d6e71]"
      />
    )
  }

  if (data?.pokemons && data.pokemons.length > 0) {
    return <PokemonGrid pokemons={data.pokemons} />
  }

  return (
    <StateMessage
      img="../../public/error-icon.png"
      alt="Error Icon"
      text="Unexpected error"
      color="text-[#a40000]"
    />
  )
}
export default Home

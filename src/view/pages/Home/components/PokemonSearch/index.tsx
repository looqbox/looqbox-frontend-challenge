import { usePokemonInformationContext } from '../../hooks/usePokemonInformationContext'
import { Searchbar } from '../../../../components/Searchbar'

export function PokemonSearch () {
  const { handleSearch, isLoadingSearch, handleSearchClear, isError } = usePokemonInformationContext()

  if (isError) {
    return null
  }

  return (
    <Searchbar onHandleSearch={handleSearch} isLoading={isLoadingSearch} onHandleSearchClear={handleSearchClear}/>
  )
}

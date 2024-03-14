import { Input, message } from 'antd'

import Pokeball from '../../../assets/icons/PokeBall'
import { useState } from 'react'

interface ISearchbarProps {
  onHandleSearch: (value: string) => Promise<void>
  isLoading?: boolean
  onHandleSearchClear: () => void
}

export function Searchbar ({ onHandleSearch, isLoading }: ISearchbarProps) {
  const [status, setStatus] = useState<'error' | 'warning' | undefined>()

  function handleSearch (value: string) {
    if (/^[a-zA-Z0-9 ]*$/.test(value)) {
      setStatus(undefined)
      void onHandleSearch(value)
    } else {
      setStatus('error')
      void message.warning('Please enter a valid search term.')
    }
  }

  return (
    <Input.Search
        size="large"
        prefix={<Pokeball />}
        loading={isLoading}
        placeholder="Search for the pokemon name or id"
        onSearch={handleSearch}
        status={status}
    />
  )
}

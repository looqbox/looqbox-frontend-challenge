import { Input } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { setSearchTerm } from '../store/pokemonSlice'
import { useState, useEffect } from 'react'

export const PokemonSearch = ({
  redirectToHome = false,
}: {
  redirectToHome?: boolean
}) => {
  const { searchTerm } = useAppSelector((state) => state.pokemon)
  const [localValue, setLocalValue] = useState(searchTerm)

  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    setLocalValue(searchTerm)
  }, [searchTerm])

  const handleSearch = (value: string) => {
    dispatch(setSearchTerm(value.trim().split(' ').join('-')))

    if (redirectToHome && location.pathname !== '/') {
      navigate('/')
    }
  }

  return (
    <Input.Search
      placeholder="Search Pokemon..."
      value={localValue.split('-').join(' ')}
      onChange={(e) => setLocalValue(e.target.value)}
      onSearch={handleSearch}
      enterButton
      allowClear
      className="max-w-md"
    />
  )
}

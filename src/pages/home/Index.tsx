import { Col, Flex, Row, theme } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { useState } from 'react'
import Logo from '../../assets/Logo'
import { useGetAllPokemon, useGetPokemon } from '../../hooks/usePokemon'
import type { PokemonProps } from '../../types/pokemonTypes'
import PokeGrid from './components/PokeGrid'
import Searchbar from './components/Searchbar'

const Home = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const [currentPage, setCurrentPage] = useState(1)
  const [searchName, setSearchName] = useState('')

  const isSearching = searchName.trim() !== ''
  const pageSize = 18

  const allPokemonQueries = useGetAllPokemon(currentPage, pageSize)
  const searchQuery = useGetPokemon(searchName.toLowerCase())

  const pokemonList: PokemonProps[] = []

  if (isSearching && searchQuery.data) {
    pokemonList.push(searchQuery.data)
  } else {
    pokemonList.push(
      ...allPokemonQueries
        .map(query => query.data)
        .filter(pokemon => pokemon !== undefined)
    )
  }

  const isLoading = isSearching
    ? searchQuery.isFetching
    : allPokemonQueries.some(query => query.isFetching)

  const isError = isSearching
    ? searchQuery.isError
    : allPokemonQueries.some(query => query.isError)

  return (
    <Content style={{ backgroundColor: colorBgContainer, padding: '64px 0px' }}>
      {/* Header */}
      <Row justify="center">
        <Col xs={24} sm={16} md={6}>
          <Flex vertical align="center" justify="center" gap={40}>
            <Logo />
            <Searchbar isLoading={isLoading} setSearchName={setSearchName} />
          </Flex>
        </Col>
      </Row>

      {/* List with all Pokémon */}
      <PokeGrid
        pokemonCount={799}
        pokemonList={pokemonList}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isSearching={isSearching}
        isLoading={isLoading}
        isError={isError}
      />
    </Content>
  )
}

export default Home

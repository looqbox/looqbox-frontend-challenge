import { Container, Pokecard } from '@/components'
import { usePokemonByName, usePokemonList } from '@/services/queries'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setSearch } from '@/store/slices/searchSlice'
import { getPokemonId, getPokemonImage } from '@/utils'
import { SearchOutlined } from '@ant-design/icons'
import { Col, Flex, Input, Row, Spin } from 'antd'
import { useState, useEffect, useMemo } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

export function Home() {
  const dispatch = useAppDispatch()
  const search = useAppSelector(state => state.search.value)
  const [inputValue, setInputValue] = useState(search)

  useEffect(() => {
    setInputValue(search)
  }, [search])

  const {
    data: pokemonList,
    fetchNextPage: fetchNextPokemonList,
    hasNextPage: hasNextPokemonList,
  } = usePokemonList()

  const { data: pokemonByName, isFetching: isFetchingPokemonByName } = usePokemonByName(
    search.toLowerCase()
  )

  const pokemons = useMemo(
    () => pokemonList?.pages.flatMap(page => page.data.results) || [],
    [pokemonList]
  )

  const renderContent = () => {
    if (search) {
      if (isFetchingPokemonByName) {
        return <Spin />
      }

      if (!pokemonByName) {
        return <p>No Pokémon found</p>
      }

      return (
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} lg={6}>
            <Pokecard
              key={pokemonByName.name}
              title={pokemonByName.name || ''}
              image={getPokemonImage(pokemonByName.id.toString())}
              url={`/details/${pokemonByName.id}`}
            />
          </Col>
        </Row>
      )
    }

    return (
      <InfiniteScroll
        dataLength={pokemons?.length || 0}
        next={fetchNextPokemonList}
        hasMore={hasNextPokemonList}
        loader={<Spin />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>All Pokémon are here!</b>
          </p>
        }
      >
        <Row gutter={[16, 16]} wrap>
          {pokemons?.map(pokemon => (
            <Col xs={24} sm={12} lg={6} key={pokemon.name}>
              <Pokecard
                title={pokemon.name || ''}
                image={getPokemonImage(getPokemonId(pokemon.url || ''))}
                url={`/details/${getPokemonId(pokemon.url || '')}`}
              />
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    )
  }

  return (
    <Container>
      <Flex vertical gap={16}>
        <Flex justify='flex-end'>
          <Input
            placeholder='Search Pokémon...'
            style={{ width: 300 }}
            value={inputValue}
            onChange={e => {
              setInputValue(e.target.value)
              if (!e.target.value) {
                dispatch(setSearch(''))
              }
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                dispatch(setSearch(inputValue))
              }
            }}
            suffix={<SearchOutlined />}
            allowClear
          />
        </Flex>

        {renderContent()}
      </Flex>
    </Container>
  )
}

import { Col, Empty, Flex, Pagination, Row, Skeleton, Typography } from 'antd'
import type { PokemonProps, PokemonTypes } from '../../../types/pokemonTypes'
import PokeCard from './PokeCard'

interface Props {
  pokemonCount: number
  pokemonList: PokemonProps[]
  isSearching: boolean
  isLoading: boolean
  isError: boolean
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const PokeGrid = ({
  pokemonCount,
  pokemonList,
  isSearching,
  isLoading,
  isError,
  currentPage,
  setCurrentPage
}: Props) => {
  if (isLoading || isError) {
    return (
      <StateHandlers
        isError={isError}
        isLoading={isLoading}
        isSearching={isSearching}
      />
    )
  }

  return (
    <>
      <Row justify="center" gutter={[16, 16]} style={{ marginTop: 24 }}>
        {pokemonList.map(pokemon => {
          const blackWhiteVer =
            pokemon.sprites.versions['generation-v']['black-white']
          const hasAnimatedSprite =
            blackWhiteVer.animated.front_default !== null

          return (
            <Col xs={24} sm={12} md={8} lg={6} xxl={4} key={pokemon.name}>
              <PokeCard
                id={String(pokemon.id)}
                name={pokemon.name}
                animatedImg={
                  hasAnimatedSprite
                    ? blackWhiteVer.animated.front_default
                    : pokemon.sprites.front_default
                }
                img={
                  hasAnimatedSprite
                    ? blackWhiteVer.front_default
                    : pokemon.sprites.front_default
                }
                types={
                  pokemon.types.map(type => type.type.name) as PokemonTypes[]
                }
                isLoading={isLoading}
              />
            </Col>
          )
        })}
      </Row>

      {!isSearching && (
        <Pagination
          align="center"
          total={pokemonCount}
          defaultPageSize={18}
          current={currentPage}
          showSizeChanger={false}
          style={{ marginTop: 24 }}
          onChange={page => setCurrentPage(page)}
        />
      )}
    </>
  )
}

const StateHandlers = ({
  isError,
  isLoading,
  isSearching
}: {
  isError: boolean
  isLoading: boolean
  isSearching: boolean
}) => {
  if (isSearching && isError) {
    return (
      <Flex
        vertical
        align="center"
        justify="center"
        style={{ marginTop: 80, height: '100%', minHeight: '60vh' }}
      >
        <Empty
          description={
            <>
              <Typography.Title level={4} type="secondary">
                No Pokémon appeared :(
              </Typography.Title>
              <Typography.Text type="secondary">
                Try searching for a different name or ID.
              </Typography.Text>
            </>
          }
        />
      </Flex>
    )
  }

  if (isError) {
    return (
      <Flex
        vertical
        align="center"
        justify="center"
        style={{ marginTop: 80, height: '100%', minHeight: '60vh' }}
      >
        <Empty
          description={
            <>
              <Typography.Title level={4} type="secondary">
                Woops! Pikachu used Thunderbolt and it failed!
              </Typography.Title>
              <Typography.Text type="secondary">
                Something went wrong while loading Pokémon data, try again in a
                moment.
              </Typography.Text>
            </>
          }
        />
      </Flex>
    )
  }

  if (isLoading) {
    return (
      <Row justify="center" gutter={[16, 16]} style={{ marginTop: 24 }}>
        {Array.from({ length: 12 }).map((_, index) => (
          <Col xs={24} sm={12} md={8} lg={6} xxl={4} key={index}>
            <Skeleton.Node style={{ width: 250, height: 400 }} />
          </Col>
        ))}
      </Row>
    )
  }
}

export default PokeGrid

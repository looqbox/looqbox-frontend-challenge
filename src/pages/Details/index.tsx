import { Container, InfoCard, PokemonStats, PokemonTitle } from '@/components'
import { PokemonCries } from '@/components/pokemon-cries/pokemon-cries'
import { PokemonFeatured } from '@/components/pokemon-featured/pokemon-featured'
import { usePokemonById } from '@/services/queries'
import { getPokemonImage, pokemonStatNames } from '@/utils'
import { Breadcrumb, Flex, Row, Col, Spin } from 'antd'
import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router'

export function Details() {
  const { id } = useParams()
  const navigate = useNavigate()

  const {
    data: pokemon,
    isLoading: isLoadingPokemon,
    isError: isErrorPokemon,
  } = usePokemonById(id!)

  const pokemonMapped = useMemo(() => {
    if (!pokemon) return null

    return {
      id: pokemon.id,
      name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
      image: getPokemonImage(String(pokemon.id)),
      weight: `${pokemon.weight / 10} kg`,
      height: `${pokemon.height / 10} m`,
      abilities: pokemon.abilities
        .filter(ability => !ability.is_hidden)
        .map(
          ability =>
            ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)
        ),
      types: pokemon.types.map(type => type.type.name),
      stats: pokemon.stats.map(stat => ({
        statName: pokemonStatNames[stat.stat.name],
        baseStat: stat.base_stat,
      })),
    }
  }, [pokemon])

  if (isErrorPokemon) {
    navigate('/')

    return null
  }

  if (!pokemonMapped || !pokemon) return null

  if (isLoadingPokemon) return <Spin />

  return (
    <Container>
      <Flex vertical gap='medium'>
        <Breadcrumb
          items={[{ title: 'Pokédex', href: '/' }, { title: pokemonMapped.name }]}
        />
        <PokemonTitle
          name={pokemonMapped.name}
          number={pokemonMapped.id}
          types={pokemonMapped.types}
        />
      </Flex>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <PokemonFeatured
            name={pokemonMapped.name}
            image={pokemonMapped.image}
            type={pokemonMapped.types[0]}
          />
        </Col>

        <Col xs={24} md={12}>
          <Flex vertical gap='large'>
            <Flex gap='small' wrap>
              <InfoCard title='Height' description={pokemonMapped.height} />

              <InfoCard title='Weight' description={pokemonMapped.weight} />

              <InfoCard
                title='Abilities'
                description={pokemonMapped.abilities.join(', ')}
              />
            </Flex>

            <PokemonCries
              cries={[
                {
                  name: 'Legacy',
                  audio: pokemon?.cries.latest,
                },
                {
                  name: 'Latest',
                  audio: pokemon?.cries.latest,
                },
              ]}
            />

            <PokemonStats stats={pokemonMapped.stats} />
          </Flex>
        </Col>
      </Row>
    </Container>
  )
}

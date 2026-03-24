import { Container, InfoCard, PokemonStats, PokemonTitle } from '@/components'
import { PokemonCries } from '@/components/pokemon-cries/pokemon-cries'
import { PokemonFeatured } from '@/components/pokemon-featured/pokemon-featured'
import { Breadcrumb, Flex, Row, Col } from 'antd'

export const Component = () => {
  return (
    <Container>
      <Flex vertical gap='medium'>
        <Breadcrumb items={[{ title: 'Pokédex', href: '#' }, { title: 'Pikachu' }]} />
        <PokemonTitle name='Pikachu' number={25} types={['electric']} />
      </Flex>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <PokemonFeatured
            name='Pikachu'
            image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
            type='electric'
          />
        </Col>

        <Col xs={24} md={12}>
          <Flex vertical gap='large'>
            <Flex gap='small' wrap>
              <InfoCard title='Height' description='7' />
              <InfoCard title='Weight' description='60' />
              <InfoCard title='Abilities' description='Static' />
            </Flex>

            <PokemonCries
              cries={[
                {
                  name: 'Legacy',
                  audio:
                    'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg',
                },
              ]}
            />

            <PokemonStats
              stats={[
                { statName: 'HP', baseStat: 40 },
                { statName: 'Attack', baseStat: 55 },
                { statName: 'Defense', baseStat: 40 },
                { statName: 'Sp. Attack', baseStat: 50 },
                { statName: 'Sp. Defense', baseStat: 50 },
                { statName: 'Speed', baseStat: 90 },
              ]}
            />
          </Flex>
        </Col>
      </Row>
    </Container>
  )
}

Component.displayName = 'Details'

import { Col, Row } from 'antd'
import type { Pokemon } from '../api/pokemon'
import { PokemonCard } from './PokemonCard'

export const PokemonGrid = ({ pokemons }: { pokemons: Pokemon[] }) => {
  return (
    <Row className="flex-1" gutter={[16, 16]}>
      {pokemons.map((pokemon) => (
        <Col key={pokemon.id} xs={24} sm={12} md={12} lg={6}>
          <PokemonCard pokemon={pokemon} />
        </Col>
      ))}
    </Row>
  )
}

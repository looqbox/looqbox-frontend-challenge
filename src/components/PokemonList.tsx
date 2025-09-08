import { Row, Col, Empty, Spin } from 'antd';
import PokemonCard from './PokemonCard';
import { useGetPokemonListDetails } from '../hooks/data/use-get-pokemon-list-details';
import type { NamedAPIResource, Pokemon } from '../types/pokemon';

interface PokemonListProps {
  pokemons: NamedAPIResource[];
  isListLoading?: boolean;
  onPokemonClick: (pokemon: Pokemon) => void;
}

const PokemonList = ({
  pokemons,
  onPokemonClick,
  isListLoading,
}: PokemonListProps) => {
  const {
    data: pokemonDetails,
    isLoading,
    isError,
  } = useGetPokemonListDetails(pokemons);

  if (isListLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Empty
          description="Nenhum Pokémon encontrado para essa pesquisa."
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      </div>
    );
  }

  return (
    <Row gutter={[24, 24]}>
      {pokemons.map((p, index) => (
        <Col key={p.name} xs={24} sm={12} md={8} lg={6}>
          <PokemonCard
            pokemon={pokemonDetails[index]}
            onClick={onPokemonClick}
            isLoading={isLoading}
            hasError={isError}
          />
        </Col>
      ))}
    </Row>
  );
};

export default PokemonList;

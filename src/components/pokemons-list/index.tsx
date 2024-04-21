import { useEffect, useState } from 'react';
import { Col, Row } from 'antd';

import PokemonCard from '../pokemon-card';
import { useGetPokemons } from '../../api/pokemons/useGetPokemons';
import SearchBar from '../search-bar';
import { IPokemon } from '../../types/models';

const PokemonsList = () => {
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const { data: pokemons=[], isLoading, refetch } = useGetPokemons(offset);

  return (
    <div>
      <SearchBar/>
      <Row gutter={[16, 24]}>
        {pokemons?.map((pokemon, index) => (
          <Col 
            key={`${pokemon.name}-${index}`} 
            span={12} 
            lg={8}
          >
            <PokemonCard 
              pokemon={pokemon}
              index={index} 
            />
          </Col>
        ))}
        {isLoading && <p>Carregando...</p>}
      </Row>
    </div>
  )
}

export default PokemonsList;
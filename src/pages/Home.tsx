import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons, fetchPokemonByName } from '../store/pokemonSlice';
import { RootState, AppDispatch } from '../store';
import { Row, Col, Typography, Input, Pagination, Skeleton, Empty } from 'antd';
import { Link } from 'react-router-dom';
import { PokemonListItem } from '../types/pokemon';
import PokemonCard from '../components/PokemonCard';

const { Title } = Typography;
const { Search } = Input;

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { list, loading, count } = useSelector((state: RootState) => state.pokemon);

  const [page, setPage] = useState(1);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const pageSize = 15;

  useEffect(() => {
    dispatch(fetchPokemons({ limit: pageSize, offset: (page - 1) * pageSize }));
  }, [dispatch, page]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (loading) {
      setShowSkeleton(true);
    } else {
      timeout = setTimeout(() => setShowSkeleton(false), 400); // delay mínimo
    }
    return () => clearTimeout(timeout);
  }, [loading]);

  const onSearch = (value: string) => {
    if (value.trim() === '') {
      dispatch(fetchPokemons({ limit: pageSize, offset: (page - 1) * pageSize }));
    } else {
      dispatch(fetchPokemonByName(value.toLowerCase()));
    }
  };

  const getPokemonId = (url: string) => {
    const parts = url.split('/').filter(Boolean);
    return parts[parts.length - 1];
  };

  return (
    <div style={{ padding: '1rem' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        Pokédex ({count})
      </Title>

      <Search
        placeholder="Buscar Pokémon"
        onSearch={onSearch}
        enterButton
        allowClear
        style={{
          maxWidth: 400,
          margin: '0 auto 2rem auto',
          display: 'block',
        }}
      />

      {showSkeleton ? (
        <Row gutter={[16, 16]}>
          {Array.from({ length: pageSize }).map((_, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Skeleton active avatar paragraph={{ rows: 2 }} />
            </Col>
          ))}
        </Row>
      ) : list.length === 0 ? (
        <div style={{ marginTop: '2rem' }}>
          <Empty
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
            styles={{ image: { height: 80 } }}
            description="Nenhum Pokémon encontrado"
          />
        </div>
      ) : (
        <>
          <Row gutter={[16, 16]}>
            {list.map((pokemon: PokemonListItem) => {
              const id = getPokemonId(pokemon.url);
              return (
                <Col xs={24} sm={12} md={8} lg={6} key={pokemon.name}>
                  <Link to={`/pokemon/${pokemon.name}`} key={pokemon.name}>
                    <PokemonCard pokemon={pokemon} id={id} />
                  </Link>
                </Col>
              );
            })}
          </Row>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <Pagination
              current={page}
              pageSize={pageSize}
              total={count}
              onChange={(p) => setPage(p)}
              showSizeChanger={false}
              simple
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;

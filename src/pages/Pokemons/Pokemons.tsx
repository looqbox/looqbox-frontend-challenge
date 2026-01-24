import { Card, Col, Row, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import { fetchPokemonPage } from '../../features/pokemon/pokemonThunks';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';

const POKEMONS_PER_PAGE = 20;

export function Pokemons() {
  const dispatch = useAppDispatch();
  const { list, listStatus } = useAppSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemonPage({ page: 1, pageSize: POKEMONS_PER_PAGE }));
  }, [dispatch]);

  return (
    <section>
      <h1>Pokemons</h1>

      <Row gutter={[16, 16]}>
        {listStatus === 'succeeded' &&
          list.map((p) => (
            <Col key={p.name} xs={12} sm={8} md={6}>
              <Link to={`/pokemon/${p.name}`}>
                <Card hoverable title={p.name} />
              </Link>
            </Col>
          ))}
        {listStatus === 'loading' && <Skeleton active />}
        {listStatus === 'failed' && <div>Não foi possivel carregar</div>}
      </Row>
    </section>
  );
}

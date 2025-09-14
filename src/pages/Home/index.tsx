import { Pagination } from 'antd';
import { useEffect } from 'react';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Loading } from '../../components/Loading';
import PokemonCard from '../../components/PokemonCard';
import { useAppDispatch, useAppSelector } from '../../core/hooks';
import { loadPokemons, setPage } from '../../core/slices/pokedexSlice';
import * as S from './styles';
function Home() {
  const { list, total, page, pageSize, status, error } = useAppSelector((s) => s.pokedex);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadPokemons(page));
  }, [page, dispatch]);

  function handleChange(nextPage: number) {
    dispatch(setPage(nextPage));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (status === 'loading') return <Loading />;
  if (status === 'failed') return <ErrorMessage message={error} />;
  return (
    <S.Container>
      <S.Inner>
        <>
          <S.Grid>
            {list.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </S.Grid>

          <Pagination
            current={page}
            total={total}
            pageSize={pageSize}
            showSizeChanger={false}
            onChange={handleChange}
            style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}
          />
        </>
      </S.Inner>
    </S.Container>
  );
}

export default Home;

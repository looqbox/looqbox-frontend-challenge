import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { fetchPokemonIndex } from '../../features/pokemon/pokemonThunks';
import { Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import Title from 'antd/es/typography/Title';
import { usePokemonIndexSearch } from '../../features/pokemon/hooks/usePokemonIndexSearch';
import Paragraph from 'antd/es/typography/Paragraph';
import { PokemonSearch } from '../../components/PokemonSearch';
import { usePokemonListQueryParams } from '../../features/pokemon/hooks/usePokemonListQueryParams';

const DEFAULT_POKEMONS_LIMIT = 16;
const SEARCH_POKEMONS_LIMIT = 20;

export function Home() {
  const dispatch = useAppDispatch();
  const { index, indexStatus, indexError } = useAppSelector((state) => state.pokemon);
  const qp = usePokemonListQueryParams({ withPage: false });
  const search = usePokemonIndexSearch({
    index,
    query: qp.qParam,
    page: 1,
    pageSize: SEARCH_POKEMONS_LIMIT,
    defaultLimit: DEFAULT_POKEMONS_LIMIT,
  });

  useEffect(() => {
    if (indexStatus === 'idle') dispatch(fetchPokemonIndex());
  }, [dispatch, indexStatus]);

  const loading = indexStatus === 'loading';
  const error = indexStatus === 'failed' ? (indexError ?? 'Failed to load index') : null;

  const isSearching = search.mode === 'search';
  const items = isSearching ? search.paged : search.defaultItems;

  const showSeeAll = isSearching && search.filtered.length > SEARCH_POKEMONS_LIMIT;

  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: 16 }}>
      <Space orientation="vertical" size={16} style={{ width: '100%' }}>
        <Space orientation="vertical" size={4} style={{ width: '100%' }}>
          <Title level={2} style={{ margin: 0 }}>
            Pokédex
          </Title>
          <Paragraph style={{ margin: 0 }}>
            Search and explore pokémon without reloading the page.
          </Paragraph>
        </Space>

        <PokemonSearch.Input
          query={qp.inputValue}
          onSubmitQuery={(next) => {
            qp.setInputValue(next);
            qp.submit(next);
          }}
          onClear={qp.clear}
          placeholder="Search all pokémon (contains)"
        />

        <PokemonSearch.Results
          title={isSearching ? `Results for “${qp.qParam}”` : 'Featured'}
          loading={loading}
          error={error}
          items={items}
          showEmpty={isSearching}
          emptyText="No matches found"
          detailsPath={(name) => `/pokemon/${name}`}
          extra={
            <Space>
              {!isSearching && (
                <Link to="/pokemons">
                  <Button>Ver todos</Button>
                </Link>
              )}

              {showSeeAll ? (
                <Link to={`/pokemons?q=${encodeURIComponent(qp.qParam)}&page=1`}>
                  <Button type="primary">Ver todos os resultados ({search.filtered.length})</Button>
                </Link>
              ) : null}
            </Space>
          }
        />
      </Space>
    </section>
  );
}

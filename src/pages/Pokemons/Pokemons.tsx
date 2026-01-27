import { useEffect, useMemo } from 'react';
import { Pagination, Space } from 'antd';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { fetchPokemonIndex } from '../../features/pokemon/pokemonThunks';
import { usePokemonIndexSearch } from '../../features/pokemon/hooks/usePokemonIndexSearch';
import { PokemonSearch } from '../../components/PokemonSearch';
import { usePokemonListQueryParams } from '../../features/pokemon/hooks/usePokemonListQueryParams';

const PAGE_SIZE = 20;

export function Pokemons() {
  const dispatch = useAppDispatch();
  const { index, indexStatus, indexError } = useAppSelector((s) => s.pokemon);
  const qp = usePokemonListQueryParams({ withPage: true });

  useEffect(() => {
    if (indexStatus === 'idle') dispatch(fetchPokemonIndex());
  }, [dispatch, indexStatus]);

  const search = usePokemonIndexSearch({
    index,
    query: qp.qParam,
    page: qp.pageParam,
    pageSize: PAGE_SIZE,
  });

  const loading = indexStatus === 'loading';
  const error = indexStatus === 'failed' ? (indexError ?? 'Failed to load index') : null;

  const title = useMemo(() => {
    if (!qp.qParam.trim()) return 'All pokémon';
    return `Results for “${qp.qParam}”`;
  }, [qp.qParam]);

  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: 16 }}>
      <Space orientation="vertical" size={16} style={{ width: '100%' }}>
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
          title={title}
          loading={loading}
          error={error}
          items={search.paged}
          showEmpty={!!qp.qParam.trim()}
          emptyText="No matches found"
          detailsPath={(name) => `/pokemon/${name}`}
          extra={
            <Pagination
              current={qp.pageParam}
              pageSize={PAGE_SIZE}
              total={search.total}
              onChange={qp.setPage}
              showSizeChanger={false}
            />
          }
        />
      </Space>
    </section>
  );
}

import { useMemo } from 'react';
import { Pagination, Space, Typography } from 'antd';
import { useAppSelector } from '../../app/store/hooks';
import { usePokemonIndexSearch } from '../../features/pokemon/hooks/usePokemonIndexSearch';
import { PokemonSearch } from '../../components/PokemonSearch';
import { usePokemonListQueryParams } from '../../features/pokemon/hooks/usePokemonListQueryParams';

const PAGE_SIZE = 20;
const { Title, Paragraph } = Typography;

export function Pokemons() {
  const { index, indexStatus, indexError } = useAppSelector((s) => s.pokemon);
  const qp = usePokemonListQueryParams({ withPage: true });

  const search = usePokemonIndexSearch({
    index,
    query: qp.qParam,
    page: qp.pageParam,
    pageSize: PAGE_SIZE,
  });

  const loading = indexStatus === 'loading';
  const error = indexStatus === 'failed' ? (indexError ?? 'Failed to load index') : null;

  const title = useMemo(() => {
    if (!qp.qParam.trim()) return '';
    return `Results for “${qp.qParam}”`;
  }, [qp.qParam]);

  return (
    <section className="section-container">
      <Space orientation="vertical" size={4} style={{ width: '100%' }}>
        <Title level={2} style={{ margin: 0 }} className="section-title">
          Explore the Pokédex
        </Title>
        <Paragraph style={{ margin: 0, textAlign: 'center' }} className="section-description">
          Find any Pokémon, explore their types, and discover detailed stats and information.
        </Paragraph>
      </Space>

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

import { useAppSelector } from '../../app/store/hooks';
import { Space, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { usePokemonIndexSearch } from '../../features/pokemon/hooks/usePokemonIndexSearch';
import { PokemonSearch } from '../../components/PokemonSearch';
import { usePokemonListQueryParams } from '../../features/pokemon/hooks/usePokemonListQueryParams';

const DEFAULT_POKEMONS_LIMIT = 16;
const SEARCH_POKEMONS_LIMIT = 20;

const { Title, Paragraph } = Typography;

export function Home() {
  const { index, indexStatus, indexError } = useAppSelector((state) => state.pokemon);
  const qp = usePokemonListQueryParams({ withPage: false });
  const search = usePokemonIndexSearch({
    index,
    query: qp.qParam,
    page: 1,
    pageSize: SEARCH_POKEMONS_LIMIT,
    defaultLimit: DEFAULT_POKEMONS_LIMIT,
  });

  const loading = indexStatus === 'loading';
  const error = indexStatus === 'failed' ? (indexError ?? 'Failed to load index') : null;

  const isSearching = search.mode === 'search';
  const items = isSearching ? search.paged : search.defaultItems;

  const showSeeAll = isSearching && search.filtered.length > SEARCH_POKEMONS_LIMIT;

  return (
    <section className='section-container'>
      <Space orientation="vertical" size={16} style={{ width: '100%' }}>
        <Space orientation="vertical" size={4} style={{ width: '100%' }}>
          <Title level={2} style={{ margin: 0 }} className='section-title'>
            Discover the Pokémon World
          </Title>
          <Paragraph style={{ margin: 0, textAlign: 'center' }} className='section-description'>
            Search for Pokémon, explore their types, and dive into their details.<br />Start here or view the complete Pokédex.
          </Paragraph>
        </Space>

        <PokemonSearch.Input
          query={qp.inputValue}
          onSubmitQuery={(next) => {
            qp.setInputValue(next);
            qp.submit(next);
          }}
          onClear={qp.clear}
          placeholder="Search by name (e.g., pikachu, mr mime)"
        />

        <PokemonSearch.Results
          title={isSearching ? `Results for “${qp.qParam}”` : ''}
          loading={loading}
          error={error}
          items={items}
          showEmpty={isSearching}
          emptyText="No matches found"
          detailsPath={(name) => `/pokemon/${name}`}
          extra={
            <Space className='pokemon-search-buttons'>
              {!isSearching && (
                <Link to="/pokemons">
                  <Button className='btn-see-all'>See all</Button>
                </Link>
              )}

              {showSeeAll ? (
                <Link to={`/pokemons?q=${encodeURIComponent(qp.qParam)}&page=1`}>
                  <Button type="primary" className='btn-see-more'>See all results ({search.filtered.length})</Button>
                </Link>
              ) : null}
            </Space>
          }
        />
      </Space>
    </section>
  );
}

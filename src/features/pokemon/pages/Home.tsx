import { Pagination, Spin, Empty } from 'antd';

import { PokemonCard } from '../components/PokemonCard';
import { PokemonNavBar } from '../components/PokemonNavBar';
import { PokemonModal } from '../components/PokemonModal';

import { usePokemon } from '@/features/hooks/usePokemon';
import { usePokemonList } from '@/features/hooks/usePokemonList';
import { usePokemonPagination } from '@/features/hooks/usePokemonPagination';
import { ErrorAlert } from '@/components/ErrorAlert';

export function PokemonHomePage() {
  const {
    list: filteredPokemons,
    search,
    setSearch,
    selectedType,
    onTypeClick,
    loadingList: loadingSearch,
  } = usePokemonList();

  const { listPagination, loadingPagination, pagination } =
    usePokemonPagination();

  const {
    pokemon,
    loadingDetails,
    modalOpen,
    fetchPokemonDetails,
    closeModal,
  } = usePokemon();

  const isSearching = search.trim().length > 0;
  const isFilteringByType = selectedType !== null;

  const displayList =
    isSearching || isFilteringByType ? filteredPokemons : listPagination;

  const isLoading = isFilteringByType
    ? loadingSearch
    : loadingPagination && !isSearching;

  return (
    <>
      <PokemonNavBar
        search={search}
        onSearch={setSearch}
        selectedType={selectedType}
        onTypeClick={onTypeClick}
      />

      <ErrorAlert />

      {isLoading ? (
        <div style={{ textAlign: 'center', padding: 60 }}>
          <Spin size="large" />
        </div>
      ) : displayList.length === 0 ? (
        <div style={{ textAlign: 'center', padding: 60 }}>
          <Empty description="Nenhum Pokémon encontrado" />
        </div>
      ) : (
        <>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 16,
            }}
          >
            {displayList.map((p, index) => (
              <PokemonCard
                key={`${p.name}-${index}`}
                name={p.name}
                url={p.url}
                onOpenDetails={fetchPokemonDetails}
              />
            ))}
          </div>

          {/* Só mostra paginação quando NÃO está buscando nem filtrando */}
          {!isSearching && !isFilteringByType && (
            <div style={{ margin: 32 }}>
              <Pagination align="center" {...pagination} />
            </div>
          )}
        </>
      )}

      <PokemonModal
        open={modalOpen}
        loading={loadingDetails}
        pokemon={pokemon}
        onClose={closeModal}
      />
    </>
  );
}

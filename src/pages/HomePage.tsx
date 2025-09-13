import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Row, Col, Spin, Pagination, Alert, Result } from 'antd';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons, fetchFilterOptions } from '../store/slices/pokemonSlice';
import { getPokemonDetails, getPokemonsByType, getPokemonsByGeneration } from '../services/pokeApi';
import type { RootState, AppDispatch } from '../store/store';
import type { PokemonListItem } from '../types/pokemon.types';
import { PokemonCard } from '../components/pokemon/PokemonCard';
import { SearchBar } from '../components/common/SearchBar';
import { ErrorDisplay } from '../components/common/ErrorDisplay';
import { FilterControls } from '../components/common/FilterControls';
import { INITIAL_LOAD_LIMIT } from '../config/constants';

const { Title } = Typography;

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const {
    list: pokemonListFromStore,
    total: totalPokemons,
    status,
    error: reduxError,
    selectedType,
    selectedGeneration,
  } = useSelector((state: RootState) => state.pokemon);

  const [displayedPokemons, setDisplayedPokemons] = useState<PokemonListItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingSearch, setLoadingSearch] = useState(false);

  useEffect(() => {
    dispatch(fetchFilterOptions());
  }, [dispatch]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      if (!selectedType && !selectedGeneration) {
        const offset = (currentPage - 1) * INITIAL_LOAD_LIMIT;
        await dispatch(fetchPokemons({ limit: INITIAL_LOAD_LIMIT, offset })).unwrap();
      } else {
        const typePromise = selectedType ? getPokemonsByType(selectedType) : Promise.resolve(null);
        const genPromise = selectedGeneration
          ? getPokemonsByGeneration(selectedGeneration)
          : Promise.resolve(null);

        const [typePokemons, genPokemons] = await Promise.all([typePromise, genPromise]);

        let finalPokemonList: PokemonListItem[] = [];
        if (typePokemons && genPokemons) {
          const genNames = new Set(genPokemons.map((p) => p.name));
          finalPokemonList = typePokemons.filter((p) => genNames.has(p.name));
        } else {
          finalPokemonList = typePokemons || genPokemons || [];
        }
        setDisplayedPokemons(finalPokemonList);
      }
    } catch {
      setError(t('home.error.fetchList'));
    } finally {
      setLoading(false);
    }
  }, [currentPage, selectedType, selectedGeneration, dispatch, t]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (!selectedType && !selectedGeneration) {
      setDisplayedPokemons(pokemonListFromStore);
    }
  }, [pokemonListFromStore, selectedType, selectedGeneration]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedType, selectedGeneration]);

  const handleSearch = async (searchTerm: string) => {
    if (!searchTerm) return;
    setLoadingSearch(true);
    setError(null);
    try {
      await getPokemonDetails(searchTerm);
      navigate(`/pokemon/${searchTerm}`);
    } catch {
      setError(t('home.error.notFound'));
    } finally {
      setLoadingSearch(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderContent = () => {
    const isLoadingData = (status === 'loading' && !selectedType && !selectedGeneration) || loading;
    const hasError = error || (status === 'failed' && reduxError);

    if (isLoadingData) {
      return (
        <Row justify="center" align="middle" style={{ minHeight: '300px' }}>
          <Spin size="large" />
        </Row>
      );
    }

    if (hasError) {
      return <ErrorDisplay error={error || reduxError} onRetry={fetchData} />;
    }

    if (displayedPokemons.length === 0 && (selectedType || selectedGeneration)) {
      return (
        <Result status="info" title={t('home.noResults')} subTitle={t('home.noResultsSubtitle')} />
      );
    }

    return (
      <Row gutter={[16, 24]}>
        {displayedPokemons.map(
          (pokemon) =>
            pokemon && (
              <Col xs={24} sm={12} md={8} lg={6} key={pokemon.name}>
                <PokemonCard pokemon={pokemon} />
              </Col>
            )
        )}
      </Row>
    );
  };

  return (
    <>
      <Row gutter={[16, 16]} align="middle" style={{ marginBottom: 24 }}>
        <Col span={24}>
          <Title level={2} style={{ margin: 0 }}>
            {t('home.title')}
          </Title>
        </Col>
      </Row>

      <SearchBar onSearch={handleSearch} loading={loadingSearch} />
      <FilterControls />

      {error && (
        <Alert
          message={t('home.error.title')}
          description={error}
          type="error"
          showIcon
          closable
          onClose={() => setError(null)}
          style={{ marginBottom: 24 }}
        />
      )}

      {renderContent()}

      {!selectedType &&
        !selectedGeneration &&
        status !== 'failed' &&
        displayedPokemons.length > 0 && (
          <Row justify="center" style={{ marginTop: 24 }}>
            <Pagination
              current={currentPage}
              total={totalPokemons}
              pageSize={INITIAL_LOAD_LIMIT}
              onChange={handlePageChange}
              showSizeChanger={false}
              showQuickJumper
              responsive
            />
          </Row>
        )}
    </>
  );
};

export default HomePage;

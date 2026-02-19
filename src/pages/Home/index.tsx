import React, { useEffect, useState } from 'react';
import { Row, Col, Pagination, Spin, Typography } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchPokemonList, searchPokemon } from '../../store/pokemonSlice';
import { PokemonCard } from '../../components/pokemon/PokemonCard';
import { useTheme } from '../../hooks/useTheme';
import { EmptyState } from '../../components/common/EmptyState';
import { ErrorState } from '../../components/common/ErrorState';

const { Title, Text } = Typography;

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isDarkMode } = useTheme();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search');

  const { list, searchResults, loading, error, count } = useAppSelector((state) => state.pokemon);

  const [currentPage, setCurrentPage] = useState(1);
  const [prevSearchTerm, setPrevSearchTerm] = useState(searchTerm);

  const pageSize = 8;

  if (searchTerm !== prevSearchTerm) {
    setPrevSearchTerm(searchTerm);
    setCurrentPage(1);
  }

  useEffect(() => {
    const offset = (currentPage - 1) * pageSize;

    if (searchTerm) {
      dispatch(searchPokemon({ term: searchTerm, limit: pageSize, offset }));
    } else {
      dispatch(fetchPokemonList({ limit: pageSize, offset }));
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [dispatch, currentPage, searchTerm]);

  const handleRetry = () => {
    const offset = (currentPage - 1) * pageSize;
    if (searchTerm) {
      dispatch(searchPokemon({ term: searchTerm, limit: pageSize, offset }));
    } else {
      dispatch(fetchPokemonList({ limit: pageSize, offset }));
    }
  };

  const displayList = searchTerm ? searchResults : list;

  if (loading) {
    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}
      >
        <Spin size='large' tip='Loading Pokemon...' />
      </div>
    );
  }

  if (error && searchTerm) {
    return <EmptyState searchTerm={searchTerm} onRetry={handleRetry} isDarkMode={isDarkMode} />;
  }

  if (error && !searchTerm) {
    return <ErrorState errorMsg={error} onRetry={handleRetry} isDarkMode={isDarkMode} />;
  }

  return (
    <div style={{ minHeight: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column' }}>
      {searchTerm && !error && (
        <div style={{ marginBottom: '24px' }}>
          <Title
            level={1}
            style={{
              margin: 0,
              fontSize: '24px',
              fontWeight: 600,
              color: isDarkMode ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.85)',
            }}
          >
            Search results for "<span style={{ color: '#1677ff' }}>{searchTerm}</span>"
          </Title>
          <Text
            style={{
              fontSize: '14px',
              color: isDarkMode ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)',
            }}
          >
            {count} {count === 1 ? 'Pokemon' : 'Pokemon'} found
          </Text>
        </div>
      )}

      <div style={{ flex: 1 }}>
        <Row gutter={[24, 24]}>
          {displayList.map((pokemon) => (
            <Col key={pokemon.id} xs={24} sm={12} md={6} lg={6} xl={6}>
              <PokemonCard pokemon={pokemon} />
            </Col>
          ))}
        </Row>
      </div>

      {!error && count > pageSize && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '32px',
            paddingBottom: '16px',
          }}
        >
          <Pagination
            current={currentPage}
            total={count}
            pageSize={pageSize}
            onChange={(page) => setCurrentPage(page)}
            showSizeChanger={false}
          />
        </div>
      )}
    </div>
  );
};

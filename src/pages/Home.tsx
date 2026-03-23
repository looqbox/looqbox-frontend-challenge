import React, { useEffect } from 'react';
import { Typography, Alert, Row, Col, Spin, Empty, Pagination } from 'antd'
import SearchBar from '../components/SearchBar';
import { usePokemonList, usePokemonSearch } from '../hooks/usePokemon';
import PokemonCard from '../components/PokemonCard';
import ErrorMessage from '../components/ErrorMessage';

const { Title, Text } = Typography;

const Home: React.FC = () => {
  const { pokemon, loading, error, total, page, setPage, pageSize } = usePokemonList();
  const { result: searchResult, loading: searching, error: searchError, search, clear } = usePokemonSearch();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && page !== 1) {
        setPage(page - 1)
      } else if (e.key === 'ArrowRight') {
        setPage(page + 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [page, setPage]);

  return (
    <div style={{ minHeight: '100vh', background: '#f7f8fc' }}>
      <div style={{
        background: 'linear-gradient(135deg, #EF5350 0%, #D32F2F 60%, #B71C1C 100%)',
        padding: '48px 32px 64px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: -60,
          right: -60,
          width: 280,
          height: 280,
          borderRadius: '50%',
          border: '40px solid rgba(255, 255, 255, 0.06)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: -60,
          left: -40,
          width: 200,
          height: 200,
          borderRadius: '50%',
          border: '30px solid rgba(255, 255, 255, 0.04)',
          pointerEvents: 'none'
        }} />

        <Title style={{
          color: '#fff',
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 800,
          fontSize: 42
        }}>
          ⚡ Pokedex
        </Title>
        <Text style={{
          color: 'rgba(255, 255, 255, 0.9)',
          fontFamily: "'Nunito', sans-serif",
          fontSize: 16,
          marginBottom: 32,
          display: 'block'
        }}>
          Descubra e explore o mundo dos Pokémon!
        </Text>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SearchBar onSearch={search} onClear={clear} loading={searching} />
        </div>
      </div>

      <div style={{ margin: '0 auto', padding: '32px 24px', maxWidth: 1200 }}>
        {searchError && (
          <Alert
            message={searchError}
            type='error'
            showIcon
            closable
            onClose={clear}
            style={{ marginBottom: 24, borderRadius: 14 }}
          />
        )}

        {searchResult && !searching && (
          <>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 20
            }}>
              <Title level={4} style={{ margin: 0, fontFamily: "'Nunito', sans-serif" }}>
                Resultado da pesquisa
              </Title>
              <Text style={{ fontFamily: "'Nunito', sans-serif", cursor: 'pointer', color: '#EF5350', fontWeight: 700 }} onClick={clear}>
                ← Voltar para lista
              </Text>
            </div>
            <Row>
              <Col xs={12} sm={8} md={6} lg={4}>
                <PokemonCard pokemon={searchResult} />
              </Col>
            </Row>
          </>
        )}

        {!searchResult && (
          <>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 20
            }}
            >
              <Title level={4} style={{ fontSize: 16, fontFamily: "'Space Mono', monospace", color: '#333', margin: 0 }}>
                Todos Pokemons
                <Text style={{ fontSize: 14, color: '#999', fontWeight: 400, marginLeft: 8 }}>
                  {total} total
                </Text>
              </Title>
              <Text style={{ fontSize: 13, fontFamily: "'Space Mono', monospace", color: '#999' }}>
                Página {page} de {Math.ceil(total / pageSize)}
              </Text>
            </div>

            {loading && (
              <div style={{ textAlign: 'center', padding: '80px 0' }}>
                <Spin size='large' tip="Carregando..." />
              </div>
            )}

            {error && <ErrorMessage message={error} onRetry={() => setPage(page)} />}

            {!loading && !error && pokemon.length === 0 && (
              <Empty description="Nenhum Pokémon encontrado" />
            )}

            {!loading && !error && (
              <>
                <Row gutter={[16, 16]}>
                  {pokemon.map((p) => (
                    <Col key={p.id} xs={12} sm={8} md={6} lg={4}>
                      <PokemonCard pokemon={p} />
                    </Col>
                  ))}
                </Row>
                <div style={{ marginTop: 40, textAlign: 'center' }}>
                  <Pagination
                    current={page}
                    total={total}
                    pageSize={pageSize}
                    onChange={setPage}
                    showSizeChanger={false}
                    showQuickJumper
                    itemRender={(_, type, element) => {
                      if (type === 'prev') return <span style={{ fontWeight: 700 }}>‹</span>
                      if (type === 'next') return <span style={{ fontWeight: 700 }}>›</span>
                      return element;
                    }}
                  />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Home;
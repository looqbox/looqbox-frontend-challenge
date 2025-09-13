import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Row, Col, Spin, Pagination } from 'antd';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from '../store/slices/pokemonSlice';
import { getPokemonDetails } from '../services/pokeApi';
import type { RootState, AppDispatch } from '../store/store';
import { PokemonCard } from '../components/pokemon/PokemonCard';
import { SearchBar } from '../components/common/SearchBar';
import { ErrorDisplay } from '../components/common/ErrorDisplay';
import { INITIAL_LOAD_LIMIT } from '../config/constants';

const { Title } = Typography;

const HomePage: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const { list: pokemons, total: totalPokemons, status, error } = useSelector(
        (state: RootState) => state.pokemon
    );

    const [currentPage, setCurrentPage] = useState(1);
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [searchError, setSearchError] = useState<string | null>(null);

    useEffect(() => {
        const offset = (currentPage - 1) * INITIAL_LOAD_LIMIT;
        dispatch(fetchPokemons({ limit: INITIAL_LOAD_LIMIT, offset }));
    }, [currentPage, dispatch]);

    const handleSearch = async (searchTerm: string) => {
        if (!searchTerm) return;
        try {
            setLoadingSearch(true);
            setSearchError(null);
            await getPokemonDetails(searchTerm);
            navigate(`/pokemon/${searchTerm}`);
        } catch {
            setSearchError(t('home.error.notFound'));
        } finally {
            setLoadingSearch(false);
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const renderContent = () => {
        if (status === 'loading') {
            return (
                <Row justify="center" align="middle" style={{ minHeight: '300px' }}>
                    <Spin size="large" />
                </Row>
            );
        }

        if (status === 'failed') {
            return <ErrorDisplay error={error || 'Unknown error'} onRetry={() => dispatch(fetchPokemons({ limit: INITIAL_LOAD_LIMIT, offset: (currentPage - 1) * INITIAL_LOAD_LIMIT }))} />;
        }

        return (
            <Row gutter={[16, 24]}>
                {pokemons.map((pokemon) => (
                    <Col xs={24} sm={12} md={8} lg={6} key={pokemon.name}>
                        <PokemonCard pokemon={pokemon} />
                    </Col>
                ))}
            </Row>
        );
    };

    return (
        <>
            <Row gutter={[16, 16]} align="middle" style={{ marginBottom: 24 }}>
                <Col span={24}>
                    <Title level={2} style={{ margin: 0 }}>{t('home.title')}</Title>
                </Col>
            </Row>

            {searchError && (
                <ErrorDisplay
                    error={searchError}
                    onRetry={() => setSearchError(null)}
                />
            )}

            <SearchBar onSearch={handleSearch} loading={loadingSearch} />

            {renderContent()}

            {status !== 'failed' && pokemons.length > 0 && (
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
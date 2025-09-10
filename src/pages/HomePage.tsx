import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Row, Col, Spin, Pagination } from 'antd';
import { useTranslation } from 'react-i18next';
import { getPokemons, getPokemonDetails } from '../services/pokeApi';
import type { PokemonListItem } from '../types/pokemon.types';
import { PokemonCard } from '../components/pokemon/PokemonCard';
import { SearchBar } from '../components/common/SearchBar';
import { ErrorDisplay } from '../components/common/ErrorDisplay';
import { INITIAL_LOAD_LIMIT } from '../config/constants';

const { Title } = Typography;

const HomePage: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [pokemons, setPokemons] = useState<PokemonListItem[]>([]);
    const [loadingList, setLoadingList] = useState<boolean>(true);
    const [loadingSearch, setLoadingSearch] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPokemons, setTotalPokemons] = useState<number>(0);

    const fetchPokemonsForPage = useCallback(async () => {
        try {
            setLoadingList(true);
            setError(null);
            const offset = (currentPage - 1) * INITIAL_LOAD_LIMIT;
            const data = await getPokemons(INITIAL_LOAD_LIMIT, offset);
            setPokemons(data.results);
            setTotalPokemons(data.count);
        } catch {
            setError(t('home.error.fetchList'));
        } finally {
            setLoadingList(false);
        }
    }, [currentPage, t]);

    useEffect(() => {
        fetchPokemonsForPage();
    }, [fetchPokemonsForPage]);

    const handleSearch = async (searchTerm: string) => {
        if (!searchTerm) return;
        try {
            setLoadingSearch(true);
            setError(null);
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
        if (loadingList) {
            return (
                <Row justify="center" align="middle" style={{ minHeight: '300px' }}>
                    <Spin size="large" />
                </Row>
            );
        }

        if (error) {
            return <ErrorDisplay error={error} onRetry={fetchPokemonsForPage} />;
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

            <SearchBar onSearch={handleSearch} loading={loadingSearch} />

            {renderContent()}

            {!error && !loadingList && pokemons.length > 0 && (
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
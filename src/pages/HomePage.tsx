import React, { useState, useEffect } from 'react';
import { Typography, Row, Col, Spin, Alert } from 'antd';
import { useTranslation } from 'react-i18next';
import { getPokemons } from '../services/pokeApi';
import type { PokemonListItem } from '../types/pokemon.types';
import { PokemonCard } from '../components/pokemon/PokemonCard';
import { INITIAL_LOAD_LIMIT } from '../config/constants';

const { Title } = Typography;

const HomePage: React.FC = () => {
    const { t } = useTranslation();
    const [pokemons, setPokemons] = useState<PokemonListItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchInitialPokemons = async () => {
            try {
                setLoading(true);
                const data = await getPokemons(INITIAL_LOAD_LIMIT, 0);
                setPokemons(data.results);
            } catch {
                setError(t('home.error.fetchList'));
            } finally {
                setLoading(false);
            }
        };

        fetchInitialPokemons();
    }, [t]);

    if (loading) {
        return (
            <Row justify="center" align="middle" style={{ minHeight: '300px' }}>
                <Spin size="large" />
            </Row>
        );
    }

    if (error) {
        return <Alert message={t('home.error.title')} description={error} type="error" showIcon />;
    }

    return (
        <Row gutter={[16, 24]}>
            <Col span={24}>
                <Title level={2}>{t('home.title')}</Title>
            </Col>
            {pokemons.map((pokemon) => (
                <Col xs={24} sm={12} md={8} lg={6} key={pokemon.name}>
                    <PokemonCard pokemon={pokemon} />
                </Col>
            ))}
        </Row>
    );
};

export default HomePage;
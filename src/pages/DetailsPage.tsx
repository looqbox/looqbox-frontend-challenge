import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Row, Col, Spin, Alert, Card, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { getPokemonByNameOrId } from '../services/pokeApi';
import type { PokemonDetails } from '../types/pokemon.types';
import { PokemonImage } from '../components/details/PokemonImage';
import { PokemonInfo } from '../components/details/PokemonInfo';
import { PokemonStats } from '../components/details/PokemonStats';

const DetailsPage: React.FC = () => {
    const { pokemonName } = useParams<{ pokemonName: string }>();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!pokemonName) return;
        const fetchDetails = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getPokemonByNameOrId(pokemonName);
                setPokemon(data);
            } catch {
                setError(t('details.error.fetchDetails'));
            } finally {
                setLoading(false);
            }
        };
        fetchDetails();
    }, [pokemonName, t]);

    if (loading) {
        return (
            <Row justify="center" align="middle" style={{ minHeight: '300px' }}>
                <Spin size="large" />
            </Row>
        );
    }

    if (error) {
        return <Alert message={t('details.error.title')} description={error} type="error" showIcon />;
    }

    if (!pokemon) return null;

    return (
        <Row justify="center">
            <Col xs={24} lg={20} xl={16}>
                <Button
                    type="text"
                    icon={<ArrowLeftOutlined />}
                    onClick={() => navigate(-1)}
                    style={{ marginBottom: 16 }}
                >
                    {t('common.backButton')}
                </Button>
                <Card>
                    <Row gutter={[24, 24]} align="middle">
                        <Col xs={24} md={10}>
                            <PokemonImage pokemon={pokemon} />
                        </Col>
                        <Col xs={24} md={14}>
                            <PokemonInfo pokemon={pokemon} />
                            <PokemonStats stats={pokemon.stats} />
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    );
};

export default DetailsPage;
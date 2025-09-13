import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Row, Col, Spin, Card, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemonDetails } from '../store/slices/pokemonSlice';
import type { RootState, AppDispatch } from '../store/store';
import { PokemonImage } from '../components/details/PokemonImage';
import { PokemonInfo } from '../components/details/PokemonInfo';
import { PokemonStats } from '../components/details/PokemonStats';
import { ErrorDisplay } from '../components/common/ErrorDisplay';

const DetailsPage: React.FC = () => {
    const { pokemonName } = useParams<{ pokemonName: string }>();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const { details: pokemon, status, error } = useSelector(
        (state: RootState) => state.pokemon
    );

    useEffect(() => {
        if (pokemonName) {
            dispatch(fetchPokemonDetails(pokemonName));
        }
    }, [pokemonName, dispatch]);

    const handleRetry = () => {
        if (pokemonName) {
            dispatch(fetchPokemonDetails(pokemonName));
        }
    };

    if (status === 'loading') {
        return (
            <Row justify="center" align="middle" style={{ minHeight: '300px' }}>
                <Spin size="large" />
            </Row>
        );
    }

    if (status === 'failed') {
        return <ErrorDisplay error={error || t('details.error.fetchDetails')} onRetry={handleRetry} />;
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
import React from 'react';
import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import type { PokemonListItem } from '../../types/pokemon.types';

const { Text } = Typography;

interface PokemonCardProps {
    pokemon: PokemonListItem;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    const pokemonId = pokemon.url.split('/').filter(Boolean).pop();

    return (
        <Link to={`/pokemon/${pokemonId}`}>
            <Card hoverable>
                <Card.Meta
                    title={<Text style={{ textTransform: 'capitalize' }}>{pokemon.name}</Text>}
                />
            </Card>
        </Link>
    );
};
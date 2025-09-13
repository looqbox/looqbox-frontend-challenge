import React from 'react';
import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import type { PokemonListItem } from '../../types/pokemon.types';

const { Text } = Typography;

interface PokemonCardProps {
    pokemon: PokemonListItem;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    // Extrai o ID da URL. Ex: "https://pokeapi.co/api/v2/pokemon/25/" -> "25"
    const pokemonId = pokemon.url.split('/').filter(Boolean).pop();

    // Constrói a URL da imagem de alta qualidade
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

    return (
        <Link to={`/pokemon/${pokemonId}`}>
            <Card
                hoverable
                cover={
                    <img
                        alt={pokemon.name}
                        src={imageUrl}
                        style={{
                            height: 150,
                            objectFit: 'contain',
                            padding: '16px'
                        }}
                    />
                }
                bodyStyle={{
                    padding: '16px',
                    textAlign: 'center'
                }}
            >
                <Card.Meta
                    title={<Text style={{ textTransform: 'capitalize' }}>{pokemon.name}</Text>}
                />
            </Card>
        </Link>
    );
};
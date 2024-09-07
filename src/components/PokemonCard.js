import React from 'react';
import { Card, CardMedia, CardContent, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function PokemonCard(props) {
    const { pokemon, image } = props;
    const { id, name } = pokemon;

    return (
        <Card
            sx={{ 
                cursor: 'pointer', 
                "&:hover": {
                    backgroundColor: "rgb(190, 190, 190)"
                },
                width: '150px', // Ajuste a largura dos cartões
                height: '220px', // Ajuste a altura dos cartões
                margin: '10px' // Adicione margens para espaçamento
            }}
        >
            <Link 
                component={RouterLink}
                to={`/pokemon/${id}`}
                sx={{ textDecoration: 'none' }}
            >
                <CardMedia
                    component="img"
                    image={image}
                    alt={name}
                    sx={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                <CardContent sx={{ textAlign: 'center', padding: '8px' }}>
                    <Typography variant="h6" noWrap>
                        {name}
                    </Typography>
                </CardContent>
            </Link>
        </Card>
    );
}

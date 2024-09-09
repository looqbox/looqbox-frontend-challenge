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
                width: { xs: '100%', sm: '150px' },
                height: { xs: 'auto', sm: '220px' },
                margin: '10px',
                maxWidth: '150px',
                borderRadius: '16px',
                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)'
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
                    sx={{ width: '100%', height: { xs: 'auto', sm: '150px' }, objectFit: 'cover' }}
                />
                <CardContent sx={{ textAlign: 'center', padding: '8px' }}>
                    <Typography variant="h6" noWrap sx={{color:'#5C80BC', textTransform: 'capitalize'}}>
                        {name}
                    </Typography>
                </CardContent>
            </Link>
        </Card>
    );
}

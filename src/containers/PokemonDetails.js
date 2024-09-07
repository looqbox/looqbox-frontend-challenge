import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { POKEMON_URL } from '../config';

export default function PokemonDetails() {
    const [pokemon, setPokemon] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${POKEMON_URL}/${id}`).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                setPokemon(response.data);
            }
        });
    }, [id]);

    if (!pokemon) {
        return <CircularProgress sx={{ marginTop: 100 }} />;
    }

    const { name, sprites, height, weight, types } = pokemon;

    return (
        <Box sx={{ textAlign: 'center', padding: '80px 0px 60px 0px' }}>
            <Typography variant="h1" sx={{ color: '#30323D', textTransform: 'uppercase', fontFamily: 'Fantasy', marginTop: 8 }}>
                {name}
            </Typography>
            <img src={sprites.front_default} alt={name} style={{ width: '500px', height: '500px' }} />
            <Box sx={{ position: 'relative', paddingBottom: '50px' }}>
                <hr style={{ height: '2px', width: '100%', backgroundColor: 'white', marginBottom: 20 }} />
                <Stack direction="row" flexWrap="wrap" spacing={2} justifyContent="center">
                    <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
                        <Typography sx={{ color: '#4D5061', fontSize: '25px', marginBottom: 15 }}>
                            <strong>Height:</strong>
                            <br />
                            {height}m
                        </Typography>
                        <Typography sx={{ color: '#4D5061', fontSize: '25px', marginBottom: 15 }}>
                            <strong>Weight:</strong>
                            <br />
                            {weight}kg
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={4} flexWrap="wrap" justifyContent="center">
                        {types.map((pokemonType, index) => {
                            const { type } = pokemonType;
                            return (
                                <Typography key={index} sx={{ color: '#4D5061', fontSize: '25px', marginBottom: 50 }}>
                                    <strong>Type:</strong>
                                    <br />
                                    {type.name}
                                </Typography>
                            );
                        })}
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
}
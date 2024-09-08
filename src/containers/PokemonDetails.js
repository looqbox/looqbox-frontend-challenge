import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { POKEMON_URL } from '../config';

export default function PokemonDetails() {
    const [pokemon, setPokemon] = useState(null);
    const [generation, setGeneration] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${POKEMON_URL}/${id}`).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                setPokemon(response.data);
            }
        });
        axios.get(`${POKEMON_URL}-species/${id}`).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                setGeneration(response.data.generation.name);
            }
        });
    }, [id]);

    if (!pokemon || !generation) {
        return <CircularProgress sx={{ marginTop: 100 }} />;
    }

    const { name, sprites, height, weight, types, abilities } = pokemon;

    return (
        <Box sx={{ textAlign: 'center', padding: '80px 0px 60px 0px' }}>
            <Typography variant="h1" sx={{ color: '#30323D', textTransform: 'uppercase', fontFamily: 'Fantasy', marginTop: 4 }}>
                {name}
            </Typography>
            <img src={sprites.front_default} alt={name} style={{ width: '250px', height: '250px' }} />
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
                        <Typography sx={{ color: '#4D5061', fontSize: '25px', marginBottom: 15 }}>
                            <strong>Abilities:</strong>
                            <br />
                            {abilities.map((ability) => ability.ability.name).join(', ')}
                        </Typography>
                        <Typography sx={{ color: '#4D5061', fontSize: '25px', marginBottom: 15 }}>
                            <strong>Generation:</strong>
                            <br />
                            {generation}
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

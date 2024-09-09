import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Stack, Typography, Divider } from '@mui/material';
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

    const capitalize = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    };

    // URL para o artwork oficial do Pokémon
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    return (
        <Box sx={{ textAlign: 'center', padding: '80px 0px 60px 0px' }}>
            <Typography variant="h1" sx={{ color: '#30323D', textTransform: 'uppercase', fontFamily: 'Fantasy', marginTop: 1, marginBottom: 1}}>
                {name}
            </Typography>
            <Stack direction="row" spacing={4} justifyContent="center" alignItems="center">
                <Box>
                    <Typography variant="h6" sx={{ color: '#4D5061', marginBottom: 2 }}>PokeAPI Sprite</Typography>
                    <img src={sprites.front_default} alt={name} style={{ width: '250px', height: '250px', borderRadius: '12px' }} />
                </Box>
                <Box>
                    <Typography variant="h6" sx={{ color: '#4D5061', marginBottom: 2 }}>Official Artwork</Typography>
                    <img src={imageUrl} alt={name} style={{ width: '250px', height: '250px', borderRadius: '12px' }} />
                </Box>
            </Stack>
            <Box sx={{ position: 'relative', paddingBottom: '50px' }}>
                <Divider sx={{ marginY: 2, borderWidth: '1px', borderColor: '#000' }} />
                <Stack direction="row" flexWrap="wrap" spacing={2} justifyContent="center">
                    <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
                        <Typography sx={{ color: '#4D5061', fontSize: '25px', marginBottom: 15 }}>
                            <strong>Height:</strong>
                            <br />
                            {capitalize(height + 'm')}
                        </Typography>
                        <Divider orientation="vertical" sx={{ height: '100%', marginX: 2, borderWidth: '1px', borderColor: '#000' }} />
                        <Typography sx={{ color: '#4D5061', fontSize: '25px', marginBottom: 15 }}>
                            <strong>Weight:</strong>
                            <br />
                            {capitalize(weight + 'kg')}
                        </Typography>
                        <Divider orientation="vertical" sx={{ height: '100%', marginX: 2, borderWidth: '1px', borderColor: '#000' }} />
                        <Typography sx={{ color: '#4D5061', fontSize: '25px', marginBottom: 15 }}>
                            <strong>Abilities:</strong>
                            <br />
                            {abilities.map((ability) => capitalize(ability.ability.name)).join(', ')}
                        </Typography>
                        <Divider orientation="vertical" sx={{ height: '100%', marginX: 2, borderWidth: '1px', borderColor: '#000' }} />
                        <Typography sx={{ color: '#4D5061', fontSize: '25px', marginBottom: 15 }}>
                            <strong>Generation:</strong>
                            <br />
                            {capitalize(generation)}
                        </Typography>
                    </Stack>
                    <Divider sx={{ marginY: 2, borderWidth: '1px', borderColor: '#000' }} />
                    <Stack direction="row" spacing={4} flexWrap="wrap" justifyContent="center">
                        {types.map((pokemonType, index) => {
                            const { type } = pokemonType;
                            return (
                                <Typography key={index} sx={{ color: '#4D5061', fontSize: '25px', marginBottom: 50 }}>
                                    <strong>Type:</strong>
                                    <br />
                                    {capitalize(type.name)}
                                </Typography>
                            );
                        })}
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
}

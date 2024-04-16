"use client";
import { PokemonData } from "@/components/PokemonCard";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  Chip,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

type PageParams = {
  params: {
    name: string;
  };
};

const ProfilePage = ({ params }: PageParams) => {
  const [pokemon, setPokemon] = useState<PokemonData>();

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${params.name}/`
    );
    setPokemon(response.data);
  };

  const handleBackToHome = () => {
    window.history.back();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
      }}
    >
      <Card sx={{ mb: 5 }}>
        <CardMedia
          component="img"
          height="300"
          image={pokemon?.sprites.front_default}
          alt={pokemon?.name}
        />
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            textAlign="center"
          >
            {pokemon?.name}
          </Typography>

          <Typography variant="body1" component="p" gutterBottom>
            Nível de experiência base: {pokemon?.base_experience}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Altura: {pokemon?.height}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Peso: {pokemon?.weight}
          </Typography>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            display="flex"
            alignContent="center"
            gap={1}
          >
            Tipos:
            {pokemon?.types.map((type, index) => (
              <Chip
                key={index}
                label={type.type.name}
                color="primary"
                variant="outlined"
                sx={{ marginRight: 1, marginBottom: 1 }}
              />
            ))}
          </Typography>
        </CardContent>
      </Card>
      <Button variant="contained" onClick={handleBackToHome}>
        Voltar para a página inicial
      </Button>
    </Box>
  );
};

export default ProfilePage;

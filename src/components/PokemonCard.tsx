"use client";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Skeleton } from "@mui/material";
import axios from "axios";

type CardProps = {
  name: string;
  url: string;
};

export interface PokemonData {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  types: Type[];
  sprites: Sprites;
}

interface Type {
  slot: number;
  type: TypeElement;
}

interface TypeElement {
  name: string;
  url: string;
}

interface Sprites {
  front_default: string;
  back_default: string;
  // Add other sprite types as needed
}
export default function PokemonCard({ name, url }: CardProps) {
  const [pokemon, setPokemon] = useState<PokemonData>();

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    const response = await axios.get(url);
    setPokemon(response.data);
  };

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea>
        {pokemon ? (
          <CardMedia
            component="img"
            height="140"
            image={pokemon?.sprites.front_default}
            alt="green iguana"
          />
        ) : (
          <Skeleton variant="rectangular" height={140} />
        )}
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="p"
            textAlign="center"
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

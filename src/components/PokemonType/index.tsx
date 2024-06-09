import { Tag } from "antd";
import React from "react";

type TypeName =
  | "normal"
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy"
  | "stellar"
  | "unknown";

interface PokemonTypeProps {
  type: string;
}

type TypesMap = {
  [key in TypeName]: string;
};

const TYPES_COLORS: TypesMap = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
  stellar: "#44628D",
  unknown: "#FAFAFA",
};

const PokemonType: React.FC<PokemonTypeProps> = ({ type: typeName }) => {
  return (
    <Tag color={TYPES_COLORS[typeName as keyof TypesMap]}>
      {typeName.toUpperCase()}
    </Tag>
  );
};

export default PokemonType;

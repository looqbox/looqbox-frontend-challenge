import { Tag } from "antd";

import typeColors from "../constants/typeColors";

interface PokemonTypesProps {
  types: string[];
}

const PokemonTypes = ({ types }: PokemonTypesProps) => (
  <>
    {types.map((type) => (
      <Tag key={type} color={typeColors[type] || "default"}>
        {type}
      </Tag>
    ))}
  </>
);

export default PokemonTypes;

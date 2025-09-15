import { Card } from "antd";
import { PokemonListItem } from "../types/pokemon";

interface PokemonCardProps {
  pokemon: PokemonListItem;
  id: string;
}

const PokemonCard = ({ pokemon, id }: PokemonCardProps) => (
  <Card
    hoverable
    cover={
      <img
        alt={pokemon.name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        style={{ height: 120, objectFit: "contain" }}
      />
    }
  >
    <Card.Meta title={pokemon.name} description={`ID: ${id}`} />
  </Card>
);

export default PokemonCard;

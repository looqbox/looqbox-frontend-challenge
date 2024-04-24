import { Link } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../state/services/pokemon";
import { Card } from "antd";

export default function PokemonCard({ name }: { name: string }) {
  const { data: pokemon, error, isLoading } = useGetPokemonByNameQuery(name);

  if (isLoading) return <div>Loading {name}...</div>;
  if (error) return <div>Error: failed to fetch {name}</div>;

  return (
    <Link to={`pokemon/${pokemon?.name}`}>
      <Card
        title={pokemon?.name}
        style={{ width: "376px" }}
        extra={pokemon?.id}
      >
        <p>{pokemon?.name}</p>
      </Card>
    </Link>
  );
}

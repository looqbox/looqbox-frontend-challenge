import { useParams } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../services/pokemon";

export default function PokemonPage() {
  const { name } = useParams();
  const { data, isLoading, isError } = useGetPokemonByNameQuery(name ?? "");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error!</div>;
  }


  return (
    <div>
      <h1>{data?.name}</h1>
      <img src={data?.sprites.front_default} alt={data?.name} />
      <p>Height: {data?.height}</p>
      <p>Weight: {data?.weight}</p>
    </div>
  );
}

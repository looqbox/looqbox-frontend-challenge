import { Suspense } from "react";
import { CardContainer, InfoContainer } from "./styles";
import { Skeleton } from "antd";

interface PokemonCardProps {
  name: string;
  url: string;
}

export function PokemonCard({ name, url }: PokemonCardProps) {
  const urlParts = url.split("/");
  const pokemonId = urlParts[urlParts.length - 2];
  const displayId = `#${pokemonId.padStart(3, "0")}`;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  return (
    <CardContainer hoverable title={displayId}>
      <Suspense fallback={<Skeleton.Image />}>
        <img src={imageUrl} />
      </Suspense>
      <InfoContainer>
        <p>{name}</p>
      </InfoContainer>
    </CardContainer>
  );
}

import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useState } from "react";

import { Pokemon } from "@/@types/pokemon";
import PokemonModal from "@/components/PokemonModal";
import { PokemonTypeImage } from "@/components/PokemonTypeImage";
import { useGetPokemon } from "@/queries/pokemons";
import { getColorBySpecies } from "@/utils/theme";

import { PokemonCardImage } from "@/components/Card/PokemonCardImage";
import * as S from "./styles";

type CardProps = {
  pokemonId: string;
};

export const Card = ({ pokemonId }: CardProps) => {
  const { isLoading, data: pokemon } = useGetPokemon(pokemonId);

  const [showPokemonDetailsModal, setShowPokemonDetailsModal] = useState(false);

  const mainType = pokemon?.types[0].type.name || "default";
  const mainImage = pokemon?.sprites.other["official-artwork"].front_default;
  const color = getColorBySpecies(mainType);

  const openModal = () => {
    setShowPokemonDetailsModal(true);
  };

  const closeModal = () => {
    setShowPokemonDetailsModal(false);
  };

  return (
    <S.Container speciescolor={color} onClick={openModal}>
      {isLoading ? (
        <S.LoadingContainer>
          <Spin indicator={<LoadingOutlined spin />} />
        </S.LoadingContainer>
      ) : (
        <S.CardContent>
          <S.CardHeader>
            <span>
              #<strong>{pokemon?.id}</strong>
            </span>
            <S.CardTypes>
              {pokemon?.types.map((type) => (
                <PokemonTypeImage key={type.type.name} type={type.type.name} />
              ))}
            </S.CardTypes>
          </S.CardHeader>
          <PokemonCardImage image={mainImage} name={pokemon?.name} />
          <S.CardFooter>
            <p>{pokemon?.name}</p>
          </S.CardFooter>
          <PokemonModal
            pokemon={pokemon as Pokemon}
            isOpen={showPokemonDetailsModal}
            setClosed={closeModal}
            color={color}
          />
        </S.CardContent>
      )}
    </S.Container>
  );
};

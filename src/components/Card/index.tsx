import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useState } from "react";

import { Pokemon } from "@/@types/pokemon";
import PokemonModal from "@/components/PokemonModal";
import { useGetPokemon } from "@/queries/pokemons";
import { getColorBySpecies } from "@/utils/theme";

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
            <img
              src={`/assets/svgs/species/${mainType}.svg`}
              alt={mainType}
              width={20}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = "/assets/svgs/icons/question-circle.svg";
              }}
            />
          </S.CardHeader>
          <img
            src={mainImage ?? "/assets/svgs/pokemon-shadow.svg"}
            alt={pokemon?.name}
            width={130}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = "/assets/svgs/pokemon-shadow.svg";
            }}
          />
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

import React from "react";
import { Card, Flex, Typography, Image } from "antd";
import { PokeAPIPokemon } from "@/@types/Pokemon";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@/hooks/hooks";
import { changeFilter } from "@/store/slices/pokemonSlice";
import PokemonType from "../PokemonType";

interface PokemonCardProps {
  pokemon: PokeAPIPokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const dispatch = useAppDispatch();
  return (
    <Link
      to={`/details/${pokemon.id}`}
      state={{ pokemon }}
      onClick={() => {
        dispatch(changeFilter(""));
      }}
    >
      <Card
        styles={{
          body: {
            padding: 8,
          },
        }}
      >
        <Flex vertical align="flex-start">
          <Flex align="center">
            <Image
              preview={false}
              src={pokemon.sprites.front_default}
              alt="Sprite"
            />
            <Flex vertical>
              <Typography.Text>
                {`#${pokemon.id.toString().padStart(3, "0")}`}
              </Typography.Text>
              <Typography.Text strong>
                {pokemon.name.toUpperCase()}
              </Typography.Text>
            </Flex>
          </Flex>
          <Flex justify="center">
            {pokemon.types.map(({ type }, index) => (
              <PokemonType key={index} type={type.name} />
            ))}
          </Flex>
        </Flex>
      </Card>
    </Link>
  );
};

export default PokemonCard;

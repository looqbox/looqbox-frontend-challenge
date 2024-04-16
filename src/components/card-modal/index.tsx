import React, { useEffect, useState } from "react";
import { Flex } from "rebass";
import { CardProps } from "./interface";
import "./style.css";
import classNames from "classnames";
import { PokemonTypeTypes } from "../../types";
import { Tag } from "../tag";
import { typeIconsBackground } from "../../types/constants.type";
import Modal from "../modal";
import usePokemon from "../../hooks/usePokemon";
import {
  IconGrid,
  IconHeight,
  IconSmallPokeball,
  IconStar,
  IconWeight,
} from "../../assets/icons";
import GenderChart from "../chart";

export const CardModal: React.FC<CardProps> = ({ pokemon }) => {
  const typeKey: string = pokemon.types[0].type.name ?? "";
  const IconComponent = typeIconsBackground[typeKey as PokemonTypeTypes];

  const {
    fetchCharacteristicPokemonById,
    pokemonDescription,
    fetchSpeciePokemonById,
    pokemonSpecie,
  } = usePokemon();

  useEffect(() => {
    if (pokemon?.id) {
      fetchCharacteristicPokemonById(pokemon.id);
      fetchSpeciePokemonById(pokemon.id);
    }
  }, [pokemon?.id]);

  console.log("pokemonSpecie", pokemonSpecie);

  return (
    <Flex
      className={classNames("card-modal", {
        [`card-modal-${pokemon.types[0].type.name}`]:
          pokemon.types[0].type.name,
      })}
    >
      <div
        className={classNames("background-modal", {
          [`background-modal-${pokemon.types[0].type.name}`]:
            pokemon.types[0].type.name,
        })}
      ></div>

      <Flex
        className={classNames("image-modal-container", {
          [`image-modal-container-${pokemon.types[0].type.name}`]:
            pokemon.types[0].type.name,
        })}
      >
        {IconComponent && (
          <Flex className="bg-image-card-modal">
            <IconComponent />
          </Flex>
        )}

        <img
          className="image-card-modal"
          src={pokemon?.sprites?.front_default}
          alt={pokemon.name}
        />
      </Flex>

      <Flex className="description-card-modal-container">
        <Flex className="name-card-modal-container">
          <Flex className="pokemon-name">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Flex>
          <Flex className="pokemon-id"># {pokemon.id}</Flex>
        </Flex>

        {pokemonDescription && pokemonDescription.descriptions && (
          <Flex>
            {pokemonDescription.descriptions
              .filter((item: any) => item.language.name === "en")
              .map((item: any, index: number) => (
                <div className="pokemon-description" key={index}>
                  {item.description}
                </div>
              ))}
          </Flex>
        )}

        <Flex sx={{ gap: "12px" }}>
          {pokemon.types.map((type) => (
            <Tag
              key={type.type.name}
              pokemonType={type.type.name as PokemonTypeTypes}
            >
              {type.type.name}
            </Tag>
          ))}
        </Flex>
      </Flex>

      <Flex
        flexDirection={"column"}
        sx={{
          gap: "24px",
          paddingBottom: "24px",
          borderBottom: "1px solid #eeeeef",
        }}
      >
        <Flex className="ability-card-modal-container">
          <Flex className="ability-card-modal-body">
            <Flex className="ability-card-modal">
              <IconWeight /> Weight
            </Flex>
            <Flex className="ability-value-card-modal">
              {(pokemon?.weight * 0.1).toFixed(2)} kg
            </Flex>
          </Flex>

          <Flex className="ability-card-modal-body">
            <Flex className="ability-card-modal">
              <IconHeight />
              Height
            </Flex>
            <Flex className="ability-value-card-modal">
              {pokemon?.height * 10} cm
            </Flex>
          </Flex>
        </Flex>

        <Flex className="ability-card-modal-container">
          <Flex className="ability-card-modal-body">
            <Flex className="ability-card-modal">
              <IconStar /> Legendary
            </Flex>

            <Flex className="ability-value-card-modal">
              {pokemonSpecie?.is_legendary ? "Yes" : "No"}
            </Flex>
          </Flex>

          <Flex className="ability-card-modal-body">
            <Flex className="ability-card-modal">
              <IconGrid /> Habitat
            </Flex>
            <Flex className="ability-value-card-modal">
              {pokemonSpecie?.habitat?.name ?? "Não definido"}
            </Flex>
          </Flex>
        </Flex>

        <Flex className="ability-card-modal-body">
          <Flex className="ability-card-modal">
            <IconSmallPokeball />
            Ability
          </Flex>
          <Flex flexDirection="column" className="ability-value-card-modal-2">
            {pokemon?.abilities?.map((ability) => (
              <div key={ability.ability.name}>
                {ability.ability.name ?? "Não definido"} <br />
              </div>
            ))}
          </Flex>
        </Flex>
      </Flex>

      <Flex className="ability-card-modal-body">
        <Flex className="ability-card-modal">Gender</Flex>
        <GenderChart pokemonSpecie={pokemonSpecie} />
      </Flex>
    </Flex>
  );
};

import React, { useEffect, useState } from "react";
import { Flex } from "rebass";
import { CardProps } from "./interface";
import "./style.css";
import classNames from "classnames";
import { PokemonTypeTypes } from "../../types";
import { Tag } from "../tag";
import { typeIconsBackground } from "../../types/constants.type";
import Modal from "../modal";
import { CardModal } from "../card-modal";
import usePokemon from "../../hooks/usePokemon";

export const Card: React.FC<CardProps> = ({ pokemon }) => {
  const typeKey: string = pokemon.types[0].type.name ?? "";
  const IconComponent = typeIconsBackground[typeKey as PokemonTypeTypes];

  const { fetchCharacteristicPokemonById, pokemonDescription } = usePokemon();

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <CardModal pokemon={pokemon} />
      </Modal>

      <Flex
        className={classNames("card", {
          [`card-${pokemon.types[0].type.name}`]: pokemon.types[0].type.name,
        })}
        onClick={handleOpenModal}
      >
        <Flex className="description-card-container">
          <Flex className="name-card-container">
            <Flex className="pokemon-id poppins-light"># {pokemon.id}</Flex>
            <Flex className="pokemon-name poppins-light">
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Flex>
          </Flex>

          <Tag pokemonType={typeKey as PokemonTypeTypes}>
            {pokemon.types[0].type.name as PokemonTypeTypes}
          </Tag>
        </Flex>

        <Flex
          className={classNames("image-container", {
            [`image-container-${pokemon.types[0].type.name}`]:
              pokemon.types[0].type.name,
          })}
        >
          {IconComponent && (
            <Flex className="bg-image-card">
              <IconComponent />
            </Flex>
          )}

          <img
            className="image-card"
            src={pokemon?.sprites?.front_default}
            alt={pokemon.name}
          />
        </Flex>
      </Flex>
    </>
  );
};

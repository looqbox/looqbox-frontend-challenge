import React, {  } from "react";
import { Flex } from "rebass";
import { Card } from "../../components/card";
import "./style.css";
import { IconEmptyView } from "../../assets/icons/empty-view";
import imagePokemon from "../../assets/images/pokemon.png";
import imagePokemonBackground from "../../assets/images/pokemon-bg.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FavouritesState } from "../../store";
import { Pokemon } from "../../interfaces/pokemon.model";
import { IconChevronLeft } from "../../assets/icons";

const Favorites: React.FC = () => {
  const { favouritePokemons } = useSelector(
    (state: FavouritesState) => state.favourites
  );

  return (
    <>
      <img className="logo" src={imagePokemon} alt="Pokemon" />

      <Link className="link-button-home" to={"/"}>
        <IconChevronLeft /> Voltar
      </Link>

      <Flex className="container">
        {favouritePokemons && !!favouritePokemons.length && (
          <Flex className="container-favorites">
            <Flex className="favorite-title">Meus favoritos</Flex>

            <div className="cards-container">
              {favouritePokemons.map((item: Pokemon, index: number) => (
                <Card key={index} pokemon={item} />
              ))}
            </div>
          </Flex>
        )}

        {!favouritePokemons.length && (
          <Flex className="empty-view-container">
            <p>{"Você não favoritou nenhum Pokémon"}</p>
            <IconEmptyView />
          </Flex>
        )}
      </Flex>
      <img className="bg" src={imagePokemonBackground} alt="Pokemon" />
    </>
  );
};

export default Favorites;

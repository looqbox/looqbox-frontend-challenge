import React, { useEffect, useState } from "react";
import usePokemon from "../../hooks/usePokemon";
import { Pokemon } from "../../interfaces/pokemon.model";
import { Input } from "../../components/Input";
import { Box, Flex } from "rebass";
import { Card } from "../../components/card";
import "./style.css";
import { Spinner } from "../../components/spinner";
import { IconEmptyView } from "../../assets/icons/empty-view";
import imagePokemon from "../../assets/images/pokemon.png";
import imagePokemonBackground from "../../assets/images/pokemon-bg.png";

const Home: React.FC = () => {
  const [searchName, setSearchName] = useState<string>("");

  const {
    fetchPokemonByName,
    fetchPokemonNames,
    fetchPopularPokemons,
    error,
    pokemon,
    setPokemon,
    pokemonNames,
    initialPokemons,
    loadingPokemon,
    loadingPokemonNames,
  } = usePokemon();

  const handleSearch = () => {
    if (searchName !== "") {
      fetchPokemonByName(searchName);
    }
  };

  useEffect(() => {
    fetchPokemonNames();
    fetchPopularPokemons();
  }, []);

  const clearSearch = () => {
    setSearchName("");
    setPokemon(null);
  };

  return (
    <>
      <img className="logo" src={imagePokemon} alt="Pokemon" />

      <Flex className="container">
        {!loadingPokemon && !loadingPokemonNames && (
          <>
            <Flex className="input-container">
              <Flex width="40%">
                <Input
                  type="text"
                  value={searchName}
                  onChange={(e) => {
                    setSearchName(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                  iconLeft
                  iconLeftOnClick={() => handleSearch()}
                  iconRight={searchName !== ""}
                  iconRightOnClick={() => clearSearch()}
                  dropdown={pokemonNames}
                  onClickDropdown={() => handleSearch()}
                />
              </Flex>
            </Flex>

            {!error && pokemon && searchName !== "" && (
              <Flex className="card-container">
                <Card pokemon={pokemon} />
              </Flex>
            )}

            {!error &&
              initialPokemons &&
              initialPokemons.length > 0 &&
              !pokemon && (
                <div className="cards-container">
                  {initialPokemons.map((item: Pokemon, index: number) => (
                    <Card key={index} pokemon={item} />
                  ))}
                </div>
              )}

            {searchName !== "" && error && (
              <Flex className="empty-view-container">
                <p>{error}</p>
                <IconEmptyView />
              </Flex>
            )}
          </>
        )}

        {loadingPokemon && loadingPokemonNames && <Spinner />}
      </Flex>
      <img className="bg" src={imagePokemonBackground} alt="Pokemon" />
    </>
  );
};

export default Home;

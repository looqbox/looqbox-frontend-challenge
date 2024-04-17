import React, { useEffect, useState } from "react";
import usePokemon from "../../hooks/usePokemon";
import { Input } from "../../components/input";
import { Flex } from "rebass";
import { Card } from "../../components/card";
import "./style.css";
import { Spinner } from "../../components/spinner";
import { IconEmptyView } from "../../assets/icons/empty-view";
import imagePokemon from "../../assets/images/pokemon.png";
import imagePokemonBackground from "../../assets/images/pokemon-bg.png";
import { Link } from "react-router-dom";
import PokemonList from "../../components/list";
import { FavouritesState } from "../../store";
import { useSelector } from "react-redux";

const Home: React.FC = () => {
  const [searchName, setSearchName] = useState<string>("");

  const {
    fetchPokemonByName,
    fetchPokemonNames,
    error,
    pokemon,
    setPokemon,
    pokemonNames,
    loading,
  } = usePokemon();

  const { favouritePokemons } = useSelector(
    (state: FavouritesState) => state.favourites
  );

  const handleSearch = (text?: string) => {
    if (!text) {
      if (searchName !== "") {
        fetchPokemonByName(searchName);
      }
    } else {
      fetchPokemonByName(text);
    }
  };

  const clearSearch = () => {
    setSearchName("");
    setPokemon(null);
  };

  useEffect(() => {
    fetchPokemonNames();
  }, []);

  return (
    <>
      <img className="logo" src={imagePokemon} alt="Pokemon" />

      <Link className="link-button" to={"/favorites"}>
        {`Favoritos (${favouritePokemons?.length})`}
      </Link>

      <Flex className="container">
        {!loading && (
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
                  onClickDropdown={(value: string) => {
                    setSearchName(value);
                    handleSearch(value);
                  }}
                />
              </Flex>
            </Flex>

            {!error && !pokemon && <PokemonList />}

            {!error && pokemon && searchName !== "" && (
              <Flex className="card-container">
                <Card pokemon={pokemon} />
              </Flex>
            )}

            {searchName !== "" && error && (
              <Flex className="empty-view-container">
                <p>{error}</p>
                <IconEmptyView />
              </Flex>
            )}
          </>
        )}

        {loading && <Spinner />}
      </Flex>

      <img className="bg" src={imagePokemonBackground} alt="Pokemon" />
    </>
  );
};

export default Home;

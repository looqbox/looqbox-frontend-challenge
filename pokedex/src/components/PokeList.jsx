import React, { useState, useEffect } from "react";

import Swal from "sweetalert2";

import { PokeCard } from "./PokeCard";
import pokeService from "../services/pokemon-services";

export const PokeList = (props) => {
  const { searchedPokemon } = props;
  const [allPokemons, setAllPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState();
  const [currentPokemons, setCurrentPokemons] = useState([]);
  const [showPokeDetail, setShowPokeDetail] = useState(false);

  const pokemonsPerPage = 10;
  const indexOfFirstPokemon = 0;
  const indexOfLastPokemon = 10;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allPokemons.length / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClickPage = (event) => {
    let goToPage = Number(event.target.id);
    let newLastIndex = goToPage * 10;
    let newFirstIndex = newLastIndex - 10;
    let newPokemonsToShow = allPokemons.slice(newFirstIndex, newLastIndex);

    setCurrentPokemons(newPokemonsToShow);
  };

  const handleClickPokemon = (pokemon) => {
    getPokemon(pokemon);
  };

  const handleViewList = () => {
    setShowPokeDetail(false);
  };

  const getPokemon = async (name = "bulbasaur") => {
    setIsLoading(true);
    let pokemon;
    try {
      let data = await pokeService.get(name);
      if (data.id) {
        pokemon = data;
        let pokemonSpecies = await pokeService.getSpecies(name);
        pokemon.species = pokemonSpecies;

        setPokemon(pokemon);
        setIsLoading(false);
        setShowPokeDetail(true);
      } else {
        Swal.fire(
          "Your pokemon couldn't be found!",
          "Please, make sure you are typing its name or ID correctly!",
          "error"
        );
        setIsLoading(false);
      }
    } catch (error) {
      Swal.fire(
        "Your pokemon couldn't be found!",
        "Please, make sure you are typing its name or ID correctly!",
        "error"
      );
      setIsLoading(false);
    }
  };

  //GETs all the Kanto's pokemon
  const getByRegion = async () => {
    try {
      let data = await pokeService.getAllKanto();
      setAllPokemons(data.results);

      setCurrentPokemons(
        data.results.slice(indexOfFirstPokemon, indexOfLastPokemon)
      );
      setIsLoading(false);
    } catch (error) {}
  };
  //triggers getPokemon when there is a new searched pokemon
  useEffect(() => {
    if (searchedPokemon) {
      getPokemon(searchedPokemon);
    }
  }, [searchedPokemon]);
  //triggers the func when component loads
  useEffect(() => {
    getByRegion();
  }, []);

  const renderTitle = () => {
    if (showPokeDetail) {
      return (
        <div>
          <h1>{`You are looking at: ${pokemon.name}!`}</h1>
          <button className="view-list-btn" onClick={handleViewList}>
            X
          </button>
        </div>
      );
    } else {
      return <h1 className="poke-list-title">Choose your Pokemon! </h1>;
    }
  };

  return (
    <div className="poke-list-container">
      <div className="poke-list-title">{renderTitle()}</div>
      <ol className="poke-list">
        {!isLoading &&
          !showPokeDetail &&
          currentPokemons.map((pokemon) => (
            <li onClick={() => handleClickPokemon(pokemon.name)}>
              {pokemon.name}
            </li>
          ))}
      </ol>
      <div className="poke-list-pages">
        {!isLoading &&
          !showPokeDetail &&
          pageNumbers.map((number) => {
            return (
              <div id={number} className="pages" onClick={handleClickPage}>
                {number}
              </div>
            );
          })}
      </div>
      {!isLoading && showPokeDetail && (
        <>
          <PokeCard pokemon={pokemon} />
        </>
      )}
    </div>
  );
};

PokeList.defaultProps = {
  searchedPokemon: "1",
};

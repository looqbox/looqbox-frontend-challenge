import React, { useState, useEffect, useRef } from "react";
import usePokemon from "../../hooks/usePokemon";
import { Pokemon } from "../../interfaces/pokemon.model";
import { Card } from "../card";
import "./style.css";
import { Flex } from "rebass";
import giff from "../../assets/images/pokeball.gif";

const PokemonList: React.FC = () => {
  const { loading, fetchPokemonsList, pokemonList } = usePokemon();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [loadingList, setLoadingList] = useState(false);

  const loadingRef = useRef<HTMLDivElement | null>(null);

  const loadMorePokemons = () => {
    setLoadingList(true);
    setTimeout(() => {
      fetchPokemonsList(offset + 15);
      setOffset((prevOffset) => prevOffset + 15);
      setLoadingList(false);
    }, 1000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loading && !loadingList) {
          loadMorePokemons();
        }
      },
      { threshold: 0.1 }
    );

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => {
      if (loadingRef.current) {
        observer.unobserve(loadingRef.current);
      }
    };
  }, [loadingRef, loading, loadingList]);

  useEffect(() => {
    if (pokemonList) {
      setPokemons((prevPokemons) => [...prevPokemons, ...pokemonList]);
    }
  }, [pokemonList]);

  useEffect(() => {
    fetchPokemonsList(offset);
  }, [offset]);

  return (
    <Flex
      width={"100%"}
      flexDirection={"column"}
      alignItems={"center"}
      sx={{ gap: "32px" }}
    >
      <div className="cards-container">
        {pokemons.map((item: Pokemon, index: number) => (
          <Card key={index} pokemon={item} />
        ))}
      </div>

      {(loadingList || loading) && (
        <Flex alignItems={"center"}>
          <p>Loading more...</p>
          <img width={"60px"} src={giff} alt="Loading" />
        </Flex>
      )}

      <div
        ref={loadingRef}
        style={{ height: "1px", visibility: "hidden" }}
      ></div>
    </Flex>
  );
};

export default PokemonList;

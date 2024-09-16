import { useState, useEffect } from "react";
import { PokemonCardStyle } from "./PokemonCardStyle";
import axios from "axios";
import { Button, Link } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { goToDetailsPage } from "../../routes/coordinator";
import { useLocation, useNavigate } from "react-router-dom";
import { addToPokedex, removeFromPokedex } from "../../store/pokemonSlice";
import { RootState } from "../../store";
import { typePokemon } from "../constants/types";
import Pokebola from "../../assets/pokebola.png";

interface PokemonCardProps {
  pokemonUrl?: string;
  pokemon?: any;
}

type PokemonTypeKey = keyof typeof typePokemon;

export function PokemonCard({ pokemonUrl, pokemon }: PokemonCardProps) {
  const dispatch = useDispatch();
  const [pokemonData, setPokemonData] = useState<any>(pokemon || null);
  const [typesLocal, setTypesLocal] = useState<
    (typeof typePokemon)[PokemonTypeKey][]
  >([]);

  const location = useLocation();
  const navigate = useNavigate();
  const { pokedex } = useSelector((state: RootState) => state.pokemon);

  const fetchPokemon = async () => {
    if (!pokemonUrl) return;

    try {
      const response = await axios.get(pokemonUrl);
      setPokemonData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!pokemon) {
      fetchPokemon();
    } else {
      setPokemonData(pokemon);
    }
  }, [pokemon, pokemonUrl]);

  useEffect(() => {
    if (pokemonData) {
      const primaryType = pokemonData?.types?.[0]?.type?.name as
        | PokemonTypeKey
        | undefined;
      const secondaryType = pokemonData?.types?.[1]?.type?.name as
        | PokemonTypeKey
        | undefined;

      if (primaryType) {
        setTypesLocal(
          [
            typePokemon[primaryType],
            secondaryType ? typePokemon[secondaryType] : undefined,
          ].filter(Boolean) as (typeof typePokemon)[PokemonTypeKey][]
        );
      }
    }
  }, [pokemonData]);

  const buttonRender = () => {
    if (!pokemonData) return null;

    const isInPokedex = pokedex.some((p) => p.id === pokemonData.id);

    if (location.pathname === "/") {
      return (
        <Button
          color="white"
          textColor="black"
          fontSize="14px"
          lineHeight="24px"
          fontWeight="400"
          width="146px"
          onClick={() => dispatch(addToPokedex(pokemonData))}
        >
          Capturar!
        </Button>
      );
    }

    if (location.pathname === "/pokedex" && isInPokedex) {
      return (
        <Button
          backgroundColor="#FF6262"
          color="red"
          textColor="white"
          fontSize="16px"
          lineHeight="24px"
          fontWeight="400"
          width="146px"
          onClick={() => dispatch(removeFromPokedex(pokemonData))}
        >
          Excluir
        </Button>
      );
    }
  };

  return (
    <PokemonCardStyle
      style={{
        backgroundImage: `url(${Pokebola})`,
        backgroundPositionX: "180px",
        backgroundColor: typesLocal[0]?.color || "gray",
      }}
    >
      <div className="infos-pokemon">
        <h2>#0{pokemonData?.id}</h2>
        <h1 style={{ textTransform: "capitalize" }}>{pokemonData?.name}</h1>
        <div className="pokemon-type">
          {typesLocal.map((type, index) => (
            <img src={type?.urlImg} key={index} alt="pokemon-type" />
          ))}
        </div>

        <Link
          fontSize="16px"
          textDecoration="underline"
          justifySelf="flex-end"
          onClick={() => goToDetailsPage(navigate, pokemonData?.id)}
        >
          Detalhes
        </Link>
      </div>

      <div className="img-button-pokemon">
        <img
          src={pokemonData?.sprites?.other["official-artwork"].front_default}
          alt="pokemon"
        />
        {buttonRender()}
      </div>
    </PokemonCardStyle>
  );
}

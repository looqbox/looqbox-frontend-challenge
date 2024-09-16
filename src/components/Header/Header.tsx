import { Button, IconButton, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { HeaderStyle } from "./HeaderStyle";
import { goToPokedexPage } from "../../routes/coordinator";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import {
  addToPokedex,
  removeFromPokedex,
  openModal,
  setPokemon,
} from "../../store/pokemonSlice";
import PokeLogo from "../../assets/PokeLogo.png";
import PokedexImg from "../../assets/pokedex.png";
import axios from "axios";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const pokedex = useSelector((state: RootState) => state.pokemon.pokedex);
  const pokemon = useSelector((state: RootState) => state.pokemon.pokemon);
  const [pokemonFound, setPokemonFound] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!pokemon || pokemon.id !== Number(params.id)) {
      fetchPokemonDetails();
    }
    findPokemonInPokedex();
  }, [pokedex, pokemon, params.id]);

  const fetchPokemonDetails = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${params.id}`
      );
      dispatch(setPokemon(response.data));
    } catch (error) {
      console.error("Erro ao buscar detalhes do Pokémon:", error);
    }
  };

  function findPokemonInPokedex() {
    const found = pokedex.some(
      (pokedexPokemon) => Number(pokedexPokemon.id) === Number(params.id)
    );
    setPokemonFound(found);
  }

  const handleAddToPokedex = () => {
    setIsLoading(true);
    dispatch(addToPokedex(pokemon));
    setTimeout(() => {
      setIsLoading(false);
      dispatch(openModal());
    }, 500);
  };

  const handleRemoveFromPokedex = () => {
    setIsLoading(true);
    dispatch(removeFromPokedex(pokemon));
    setTimeout(() => {
      setIsLoading(false);
      dispatch(openModal());
    }, 500);
  };

  const rightHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <img
            src={PokedexImg}
            alt="Pokédex"
            className="pokedex-img"
            onClick={() => goToPokedexPage(navigate)}
          />
        );

      case "/pokedex":
        return (
          <Text fontSize="24px" fontWeight="bold" color="black">
            Minha Pokédex
          </Text>
        );

      case `/details/${params.id}`:
        return (
          <>
            {pokemonFound ? (
              isLoading ? (
                <IconButton
                  icon={<ChevronLeftIcon />}
                  aria-label="Removing from Pokedex"
                  colorScheme="red"
                  isRound
                  size="lg"
                  isLoading={isLoading}
                />
              ) : (
                <Button
                  colorScheme="red"
                  width="226px"
                  height="57px"
                  fontSize="18px"
                  onClick={handleRemoveFromPokedex}
                  _hover={{ width: "260px", transition: "width 0.3s" }}
                >
                  Excluir da Pokédex
                </Button>
              )
            ) : isLoading ? (
              <IconButton
                icon={<ChevronLeftIcon />}
                aria-label="Adding to Pokedex"
                colorScheme="green"
                isRound
                size="lg"
                isLoading={isLoading}
              />
            ) : (
              <Button
                colorScheme="green"
                width="226px"
                height="57px"
                fontSize="18px"
                onClick={handleAddToPokedex}
                _hover={{ width: "260px", transition: "width 0.3s" }}
              >
                Adicionar à Pokédex
              </Button>
            )}
          </>
        );

      default:
        return null;
    }
  };

  const leftHeader = () => {
    switch (location.pathname) {
      case "/":
        return null;

      case "/pokedex":
      case `/details/${params.id}`:
        return (
          <IconButton
            onClick={() => navigate(-1)}
            aria-label="Voltar"
            icon={<ArrowBackIcon />}
            colorScheme="blue"
            isRound
            size="lg"
            variant="solid"
            bg="blue.500"
            _hover={{ bg: "blue.600" }}
            color="white"
          />
        );

      default:
        return null;
    }
  };

  return (
    <HeaderStyle>
      <div className="header-div">{leftHeader()}</div>
      <div className="header-div">
        <img src={PokeLogo} alt="Logo" />
      </div>
      <div className="header-div">{rightHeader()}</div>
    </HeaderStyle>
  );
}

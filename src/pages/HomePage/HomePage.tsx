import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import { RootState } from "../../store";
import { setPokelist } from "../../store/pokemonSlice";
import axios from "axios";
import { BASE_URL } from "../../components/constants/BASE_URL";
import { HomePageStyle } from "./HomePageStyle";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Pagination } from "../../components/Pagination/Pagination";
import { PokemonList } from "../../components/PokemonList/PokemonList";
import { useNavigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

export function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filteredPokelist, isModalOpen } = useSelector(
    (state: RootState) => state.pokemon
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(15);

  useEffect(() => {
    const fetchPokelist = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/?limit=100`);
        dispatch(setPokelist(response.data.results));
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      }
    };
    fetchPokelist();
  }, [dispatch]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const foundPokemons = filteredPokelist.filter((pokemon) =>
        pokemon.name.includes(searchQuery)
      );

      if (foundPokemons.length > 0) {
        navigate(`/details/${foundPokemons[0].name}`);
      }
    }
  };

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = filteredPokelist
    .filter((pokemon) => pokemon.name.includes(searchQuery))
    .slice(indexOfFirstPokemon, indexOfLastPokemon);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredPokelist.length / pokemonsPerPage);

  return (
    <>
      {isModalOpen && <Modal />}
      <Header />
      <HomePageStyle>
        <h3>Pokemóns disponíveis!</h3>
        <Flex justifyContent="center" mb={6}>
          <SearchBar
            searchQuery={searchQuery}
            handleSearchChange={handleSearchChange}
            handleKeyPress={handleKeyPress}
          />
        </Flex>
        <PokemonList pokemons={currentPokemons} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
        />
      </HomePageStyle>
    </>
  );
}

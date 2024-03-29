import React, { useEffect } from "react";
import { Typography, Input } from "antd";
import { useDispatch } from "react-redux";
import { SearchProps } from "antd/es/input";
import PokemonsList from "../../components/PokemonsList";
import { fetchPokemons, searchPokemon } from "../../store/pokemonSlicer";
import { AppDispatch } from "../../store";
import CustomPagination from "../../components/Pagination";
import Page from "../../components/Page";
import "./styles.css";

const { Title, Text } = Typography;
const { Search } = Input;

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch: SearchProps["onSearch"] = (value) => {
    const formattedValue = value.toLowerCase().trim();

    if (formattedValue) {
      dispatch(searchPokemon(formattedValue));
    } else {
      dispatch(fetchPokemons(0));
    }
  };

  useEffect(() => {
    dispatch(fetchPokemons(0));
  }, []);

  return (
    <Page>
      <Title>Welcome to Pokédex!</Title>
      <Text className="intro">
        Enter a Pokémon's name or number in the search bar below to begin your
        journey.
      </Text>
      <Search
        className="search-bar"
        placeholder="Pokémon's name or number"
        enterButton="Search"
        size="large"
        onSearch={handleSearch}
        allowClear
      />
      <PokemonsList />
      <CustomPagination />
    </Page>
  );
};

export default Home;

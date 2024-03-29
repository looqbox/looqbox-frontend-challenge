import React, { useEffect } from "react";
import { Typography, Input, Grid } from "antd";
import { useDispatch } from "react-redux";
import { SearchProps } from "antd/es/input";
import PokemonsList from "../components/PokemonsList";
import { fetchPokemons, searchPokemon } from "../store/pokemonSlicer";
import { AppDispatch } from "../store";
import CustomPagination from "../components/Pagination";
import Page from "../components/Page";

const { Title, Text } = Typography;
const { Search } = Input;
const { useBreakpoint } = Grid;

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const screens = useBreakpoint();
  const isDesktop = screens.md;

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
      <Text style={{ marginBottom: "24px" }}>
        Enter a Pokémon's name or number in the search bar below to begin your
        journey.
      </Text>
      <Search
        style={{
          width: `${isDesktop ? "50%" : "100%"}`,
          marginBottom: "40px",
        }}
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

import React, { useEffect } from "react";
import { Layout, Typography, Input, Grid } from "antd";
import { useDispatch } from "react-redux";
import CustomHeader from "../components/Header";
import PokemonsList from "../components/PokemonsList";
import { fetchPokemons } from "../store/pokemonSlicer";
import { AppDispatch } from "../store";
import CustomPagination from "../components/Pagination";

const { Content } = Layout;
const { Title, Text } = Typography;
const { Search } = Input;
const { useBreakpoint } = Grid;

const ContentStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  minHeight: "calc(100vh - 64px)",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "E0E2DB",
  padding: "40px 18px",
};

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const screens = useBreakpoint();
  const isDesktop = screens.md;

  useEffect(() => {
    dispatch(fetchPokemons(0));
  }, []);

  return (
    <Layout>
      <CustomHeader />
      <Content style={ContentStyle}>
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
          allowClear
        />
        <PokemonsList />
        <CustomPagination />
      </Content>
    </Layout>
  );
};

export default Home;

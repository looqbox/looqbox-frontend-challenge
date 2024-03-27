import React from "react";
import { Layout, Typography, Input } from "antd";
import { useMediaQuery } from "react-responsive";
import CustomHeader from "../components/Header";
const { Content } = Layout;
const { Title, Text } = Typography;
const { Search } = Input;

const ContentStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  minHeight: "calc(100vh - 64px)",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "#fff",
  padding: "40px 18px",
  color: "#fff",
};

const Home: React.FC = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 992px)" });

  return (
    <Layout>
      <CustomHeader />
      <Content style={ContentStyle}>
        <Title>Welcome to Pokédex!</Title>
        <Text style={{ marginBottom: "24px" }}>
          Simply enter a Pokémon's name or number in the search bar below to
          begin your journey.
        </Text>
        <Search
          style={{ width: `${isDesktop ? "50%" : "100%"}` }}
          placeholder="Pokémon's name or number"
          enterButton="Search"
          size="large"
          allowClear
        />
      </Content>
    </Layout>
  );
};
export default Home;

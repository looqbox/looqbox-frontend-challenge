import React from "react";
import HeaderComponent from "../../components/Header";
import SearchComponent from "../../components/Search";
import PokemonList from "../../components/PokemonList";
import { Pagination, Layout } from "antd";
import usePokemonSearch from "../../../hooks/usePokemonSearch";
import "./styles.css";

const { Content } = Layout;

const Home: React.FC = () => {
  const {
    pokemonsToShow,
    handleSearch,
    handlePageChange,
    pagination,
    itemsPerPage,
    loading,
    totalPages,
    searchValue,
  } = usePokemonSearch();

  return (
    <Layout className="home-container">
      <HeaderComponent />
      <Content className="home-content">
        <SearchComponent onSearch={handleSearch} />
        <PokemonList pokemons={pokemonsToShow} loading={loading} />
        {!searchValue && (
          <div className="pagination">
            <Pagination
              simple={{ readOnly: true }}
              defaultCurrent={pagination}
              total={totalPages}
              onChange={handlePageChange}
              pageSize={itemsPerPage}
              
            />
          </div>
        )}
      </Content>
    </Layout>
  );
};

export default Home;

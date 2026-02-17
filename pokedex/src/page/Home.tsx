import type React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import SearchBar from "../components/SearchBar";
import PokemonCard from "../components/PokemonCard";
import { Alert, Spin, Row, Col, ConfigProvider, Pagination } from "antd";
import {
  clearSearch,
  loadPokemonList,
  setCurrentPage,
} from "../store/pokemonSlice";

const Home: React.FC = () => {
  const ITEMS_PER_PAGE = 20;

  const dispatch = useDispatch<AppDispatch>();
  const {
    pokemonList,
    searchResults,
    loading,
    error,
    currentPage,
    totalCount,
  } = useSelector((state: RootState) => state.pokemon);

  useEffect(() => {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    dispatch(loadPokemonList({ offset, limit: ITEMS_PER_PAGE }));
  }, [dispatch, currentPage]);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogoClick = () => {
    dispatch(setCurrentPage(1));
    dispatch(clearSearch());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const displayList =
    searchResults.length > 0
      ? searchResults.map((pokemon) => ({ name: pokemon.name, url: "" }))
      : pokemonList;

  return (
    <div className="min-h-screen bg-(--background)">
      <header className="sticky top-0 z-50 bg-(--primary) text-(--primary-foreground) shadow-lg">
        <div className="container mx-auto h-15 px-6 py-6 flex items-center gap-4">
          <h1
            className="text-2xl font-extrabold cursor-pointer"
            onClick={handleLogoClick}
          >
            Pokedex
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <SearchBar />
        </div>

        {error && (
          <Alert
            className="mb-24"
            title="Error"
            description={error}
            type="error"
            showIcon
            closable
          />
        )}

        {loading ? (
          <div className="text-center py-[60px 0]">
            <Spin size="large" description="Loading Pokemon..." />
          </div>
        ) : (
          <>
            <Row gutter={[16, 16]}>
              {displayList.map((pokemon) => (
                <Col key={pokemon.name} xs={24} sm={12} md={8} lg={6} xl={6}>
                  <PokemonCard name={pokemon.name} />
                </Col>
              ))}
            </Row>

            {searchResults.length === 0 && (
              <div className="flex items-center justify-center gap-1 mt-8">
                <ConfigProvider
                  theme={{
                    components: {
                      Pagination: {
                        itemActiveBg: "hsl(0 72% 51%)",
                        colorPrimary: "hsl(0 0% 100%)",
                        colorPrimaryHover: "hsl(0 0% 100%)",
                        borderRadius: 15,
                      },
                    },
                  }}
                >
                  <Pagination
                    current={currentPage}
                    total={totalCount}
                    pageSize={ITEMS_PER_PAGE}
                    onChange={handlePageChange}
                    showSizeChanger={false}
                  />
                </ConfigProvider>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Home;

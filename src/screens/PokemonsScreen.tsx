import { Suspense, useEffect, useState } from "react";
import PageLayout from "../components/UI/icons/PageLayout";
import PokemonCardList from "../components/Pokemon/PokemonCardList";
import SearchBar from "../components/SearchBar";
import { Pagination, PaginationProps } from "antd";
import { usePokemonsUrl } from "../hooks/usePokemonsUrl";
import { usePokemons } from "../hooks/usePokemons";
import { useNavigate } from "react-router-dom";
import useSearch from "../hooks/useSearch";

function PokemonsScreen() {
  const [page, setPage] = useState(1);
  const { totalPages, pokemonsUrls } = usePokemonsUrl(page);
  const { pokemons } = usePokemons(pokemonsUrls, page);

  const navigate = useNavigate();

  const search = useSearch();

  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      return <button>Anterior</button>;
    }
    if (type === "next") {
      return <button>Próximo</button>;
    }
    return originalElement;
  };

  const handleChangePage = (page: number) => {
    setPage(page);
    window.scrollTo(0, 0);
    navigate(`?page=${page}`);
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const page = url.searchParams.get("page");
    if (page) {
      setPage(parseInt(page));
    }
  }, []);
  return (
    <PageLayout>
      <SearchBar onSubmitSearch={search} placeholder="Buscar pokémon" />
      <Suspense fallback={<div>Loading...</div>}>
        <PokemonCardList pokemons={pokemons ?? []} />
      </Suspense>
      <div className="mt-16">
        <Pagination
          total={totalPages}
          current={page}
          pageSize={20}
          showSizeChanger={false}
          itemRender={itemRender}
          onChange={handleChangePage}
        />
      </div>
    </PageLayout>
  );
}

export default PokemonsScreen;

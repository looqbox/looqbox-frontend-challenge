import { Pagination } from "antd";
import { DashboardContainer, ListContainer, SearchContainer } from "./styles";
import { PokemonCard } from "@/components/PokemonCard";
import { useQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "@/api/fetch-pokemon-list";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import { GridLoading } from "@/components/GridLoading";

export function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get("page") ?? "1");

  const { data, isLoading } = useQuery({
    queryFn: () => fetchPokemonList({ page: pageIndex }),
    queryKey: ["fetch-list", pageIndex],
  });

  function handlePageChange(page: number) {
    setSearchParams((prev) => {
      prev.set("page", String(page));
      return prev;
    });
  }

  return (
    <DashboardContainer>
      <SearchContainer
        placeholder="Search pokémon name"
        enterButton="Search"
        size="large"
      />

      {isLoading ? (
        <GridLoading />
      ) : (
        <>
          <ListContainer>
            {data?.results.map((result) => (
              <PokemonCard
                key={result.name}
                name={result.name}
                url={result.url}
              />
            ))}
          </ListContainer>

          <Pagination
            align="center"
            current={pageIndex + 1}
            total={data?.count}
            onChange={handlePageChange}
            showSizeChanger={false}
            pageSize={20}
          />
        </>
      )}
    </DashboardContainer>
  );
}

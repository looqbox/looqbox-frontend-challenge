import { Pagination } from "antd";
import { DashboardContainer, ListContainer, SearchContainer } from "./styles";
import { PokemonCard } from "@/components/PokemonCard";

export function Dashboard() {
  return (
    <DashboardContainer>
      <SearchContainer
        placeholder="Search pokémon name"
        enterButton="Search"
        size="large"
      />

      <ListContainer>
        {Array.from({ length: 20 }).map((_, index) => (
          <PokemonCard key={index} />
        ))}
      </ListContainer>

      <Pagination align="center" />
    </DashboardContainer>
  );
}

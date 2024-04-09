import { Col, Pagination, Row } from "antd";

import { Result } from "@/@types/services";
import { Card } from "@/components/Card";

import * as S from "./styles";

type PokemonsListProps = {
  pokemons: Result[];
  page: number;
  pageSize: number;
  total: number;
  handlePagination: (page: number, pageSize: number) => void;
};

export const PokemonsList = ({
  pokemons,
  page,
  pageSize,
  total,
  handlePagination,
}: PokemonsListProps) => {
  return (
    <S.Container>
      <Row gutter={[16, 16]} justify="center">
        {pokemons.map((pokemon) => (
          <Col className="gutter-row" key={pokemon.name}>
            <Card
              key={pokemon.name}
              pokemonId={pokemon.url.split("/")[6] as string}
            />
          </Col>
        ))}
      </Row>
      <Pagination
        defaultCurrent={page}
        total={total}
        onChange={handlePagination}
        pageSize={pageSize}
        pageSizeOptions={[20, 40, 50, 100]}
      />
    </S.Container>
  );
};

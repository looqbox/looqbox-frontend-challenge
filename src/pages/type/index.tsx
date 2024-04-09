import { LoadingOutlined } from "@ant-design/icons";
import { Space, Spin } from "antd";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { Pagination as PaginationProps, Result } from "@/@types/services";
import { PokemonsList } from "@/components/PokemonsList";
import { PokemonTypeImage } from "@/components/PokemonTypeImage";
import { useGetPokemonsByType } from "@/queries/pokemons";
import { initialPagination, paginatedPokemons } from "@/utils/pagination";
import { getColorBySpecies } from "@/utils/theme";

import * as S from "./styles";

export const TypePage = () => {
  const { type: urlType } = useParams();

  const type = urlType || "default";

  const { data, isLoading } = useGetPokemonsByType(type);
  const [pokemons, setPokemons] = useState<Result[]>([]);
  const [pagination, setPagination] =
    useState<PaginationProps>(initialPagination);

  const color = getColorBySpecies(type);
  const strong = data?.damage_relations?.double_damage_to || [];
  const weak = data?.damage_relations?.double_damage_from || [];
  const pokemonsResult: Result[] = useMemo(
    () => data?.pokemon?.map((p) => p.pokemon) || [],
    [data],
  );

  useEffect(() => {
    const pokemons = paginatedPokemons(
      pokemonsResult,
      pagination.page,
      pagination.pageSize,
    );

    setPokemons(() => [...pokemons]);
  }, [pokemonsResult, pagination]);

  if (isLoading) {
    return (
      <Spin
        spinning={true}
        fullscreen
        indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
      />
    );
  }

  const handlePagination = (page: number, pageSize: number) => {
    setPagination((prev) => ({ ...prev, page, pageSize }));
  };

  return (
    <S.Container color={color}>
      <S.Header>
        <Space size={24}>
          <PokemonTypeImage type={type} size={40} />
          <h1>{type}</h1>
          <h3>{data?.pokemon?.length} pokemons</h3>
        </Space>
        <Space direction="vertical" size={24}>
          {strong.length > 0 ? (
            <S.Info>
              {strong?.map((type) => (
                <PokemonTypeImage type={type.name} size={20} key={type.name} />
              ))}
              <S.TextStrong>Strong against</S.TextStrong>
            </S.Info>
          ) : null}
          {weak.length > 0 ? (
            <S.Info>
              {weak?.map((type) => (
                <PokemonTypeImage type={type.name} size={20} key={type.name} />
              ))}
              <S.TextWeak>Weak against</S.TextWeak>
            </S.Info>
          ) : null}
        </Space>
      </S.Header>
      <PokemonsList
        isLoading={isLoading}
        pokemons={pokemons}
        page={pagination.page}
        pageSize={pagination.pageSize}
        total={pokemonsResult.length}
        handlePagination={handlePagination}
      />
    </S.Container>
  );
};

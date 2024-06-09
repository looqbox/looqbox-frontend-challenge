import { Divider, List, Skeleton } from "antd";
import React, { useEffect, useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PokemonCard from "../PokemonCard";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { getPokemon, appendMorePokemon } from "@/store/slices/pokemonSlice";
import Fuse from "fuse.js";
import { PokeAPIPokemon } from "@/@types/Pokemon";

const PokemonList: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    list: {
      items: pokemonList,
      status: pokemonListStatus,
      next: hasNextPokemon,
      filter: pokemonNameFilter,
    },
  } = useAppSelector((state) => state.pokemons);

  const pokemonListWithFilter = useMemo(() => {
    const fuse = new Fuse(pokemonList, {
      keys: ["name"],
      threshold: 0.2,
      sortFn: (a, b) =>
        (a.item as unknown as PokeAPIPokemon).id -
        (b.item as unknown as PokeAPIPokemon).id,
    });

    return pokemonNameFilter
      ? fuse.search(pokemonNameFilter).map(({ item }) => item)
      : pokemonList;
  }, [pokemonNameFilter, pokemonList]);

  useEffect(() => {
    if (pokemonListStatus === "idle") {
      dispatch(getPokemon());
    }
  }, [dispatch, pokemonListStatus]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        pokemonNameFilter &&
        pokemonListWithFilter.length < 50 &&
        hasNextPokemon
      ) {
        if (pokemonListStatus !== "loading") {
          dispatch(appendMorePokemon(hasNextPokemon));
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [
    pokemonNameFilter,
    pokemonListWithFilter,
    hasNextPokemon,
    pokemonListStatus,
    dispatch,
  ]);

  const loadMore = () => {
    if (pokemonListStatus !== "loading") {
      dispatch(appendMorePokemon(hasNextPokemon));
    }
  };

  return (
    <InfiniteScroll
      dataLength={pokemonListWithFilter.length}
      next={loadMore}
      hasMore={!!hasNextPokemon}
      endMessage={<Divider plain>You have seen it all 🤐</Divider>}
      loader={<Skeleton active avatar paragraph={{ rows: 1 }} />}
    >
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
          xxl: 6,
        }}
        dataSource={pokemonListWithFilter}
        style={{ marginTop: 16, paddingLeft: 16, paddingRight: 16 }}
        renderItem={(item) => {
          return (
            <List.Item>
              <PokemonCard pokemon={item} />
            </List.Item>
          );
        }}
      />
    </InfiniteScroll>
  );
};

export default PokemonList;

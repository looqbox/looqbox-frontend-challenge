import React, { useCallback, useRef, useState, FormEvent, useEffect } from 'react';
import PokemonCard from '@/components/PokemonCard';
import usePokemonsList from '@/hooks/usePokemonsList';
import { Button, Input, InputRef, Skeleton, message } from 'antd';
import { IoSearch } from 'react-icons/io5';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import MainLayout from '@/layouts/MainLayout';
import { LIMIT } from '@/utils/api';
import usePokemon from '@/hooks/usePokemon';
import { Helmet } from 'react-helmet';

const Home: React.FC = () => {
  const [showPokemon, setShowPokemon] = useState(false);
  const [pokemonSearch, setPokemonSearch] = useState('');

  const inputRef = useRef<InputRef | null>(null);
  const observer = useRef<IntersectionObserver>();
  const pokemonsQty = useRef(0);

  const { data: pokemons, isLoading, fetchNextPage, hasNextPage, isFetching } = usePokemonsList();
  const {
    data: pokemonData,
    isLoading: isLoadingPokemon,
    isFetching: isFetchingPokemon,
    refetch,
  } = usePokemon({ name: pokemonSearch.toLowerCase().trim(), enabled: false });

  if (pokemons.length) {
    // Keep tracking of the pokemons length because of the skeletons on the infinite scroll
    pokemonsQty.current = pokemons.length;
  }

  const lastElementRef = useCallback(
    (node: HTMLAnchorElement) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching && !showPokemon) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [fetchNextPage, hasNextPage, isFetching, isLoading, showPokemon],
  );

  const onSearch = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputRef.current?.input?.value) {
      return;
    }

    setPokemonSearch(inputRef.current?.input?.value || '');
    setShowPokemon(true);
  }, []);

  // If we set a state to control de input value, it would trigger many rerenders
  // Doing it here in a effect, it just triggers the fetch once when the "Search" is clicked
  useEffect(() => {
    if (!pokemonSearch) {
      return;
    }

    (async () => {
      const res = await refetch();
      if (res.isError) {
        message.error("We couldn't find your Pokémon", 3);
      }
    })();
  }, [pokemonSearch, refetch]);

  const isLoadingSearch = isLoadingPokemon || isFetchingPokemon;

  return (
    <MainLayout>
      <Helmet>
        <title>Pokémon</title>
      </Helmet>
      <div className="relative">
        <ScrollToTopButton />
        <div className="flex items-center justify-between w-full flex-1 gap-5 mb-10 max-[580px]:flex-col">
          <button
            className="duration-300 bg-transparent transition-all hover:scale-105"
            onClick={() => setShowPokemon(false)}
          >
            <img src="/pokemon_logo.png" className="w-[200px]" />
          </button>
          <form
            onSubmit={onSearch}
            className="relative flex-1 w-full max-w-[600px] max-[580px]:max-w-none text-white"
          >
            <Input
              className="h-10 rounded-3xl pr-28 disabled:bg-white disabled:opacity-80"
              placeholder="E.g.: Pikachu"
              ref={inputRef}
              disabled={isLoadingSearch}
              onChange={(e) => {
                const value = e.currentTarget.value;
                if (!value) {
                  setShowPokemon(false);
                }
              }}
            />
            <Button
              type="primary"
              className="absolute h-8 bottom-0 rounded-2xl top-1 right-1 border-none flex items-center gap-1 disabled:bg-[#4096ff]  disabled:opacity-80 disabled:text-white"
              loading={isLoadingSearch}
              disabled={isLoadingSearch}
              htmlType="submit"
            >
              {!isLoadingSearch && <IoSearch color="white" stroke="white" size={22} fill="white" />}
              Search
            </Button>
          </form>
        </div>
        <div
          className={`${showPokemon && pokemonData ? 'flex mx-auto w-full max-w-[400px]' : 'grid grid-cols-4 gap-8 max-[580px]:grid-cols-1 max-[900px]:grid-cols-2 max-[1140px]:grid-cols-3'}`}
        >
          {showPokemon && pokemonData ? (
            <PokemonCard pokemon={pokemonData} />
          ) : isFetching || isLoading || !pokemons.length ? (
            // On first render pokemonsQty is 0 so get it from LIMIT
            [...Array(pokemonsQty.current || LIMIT)].map((_, i) => (
              <Skeleton.Button
                key={i}
                active
                style={{
                  width: '100%',
                  height: 300,
                  borderRadius: 16,
                }}
              />
            ))
          ) : (
            pokemons.map((pokemon, index) => {
              if (!pokemon) return null;
              return (
                <PokemonCard
                  key={index}
                  innerRef={index + 1 === pokemons.length ? lastElementRef : undefined}
                  pokemon={pokemon}
                />
              );
            })
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;

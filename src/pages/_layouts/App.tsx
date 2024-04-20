import { useQuery } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Loading } from '@/components/Loading';
import { getPokemons } from '@/requests/get-pokemons';
import { useAppDispatch, useAppSelector } from '@/store';
import { addPokemons, setPokemonsCount } from '@/store/slices/pokemons';

export function AppLayout() {
  const dispatch = useAppDispatch();
  const offset = useAppSelector((state) => state.pokemons.pageOffset);
  const pokemons = useAppSelector((state) => state.pokemons.pokemons);

  const { data: pokemonsResponse, isLoading: isLoadingPokemons } = useQuery({
    queryKey: ['pokemons'],
    queryFn: () => getPokemons({ offset }),
    staleTime: Infinity,
  });

  if (pokemonsResponse && pokemons.length === 0) {
    dispatch(setPokemonsCount([pokemonsResponse.count]));
    dispatch(addPokemons([pokemonsResponse.pokemons]));
  }

  if (isLoadingPokemons) {
    return (
      <div className="h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen grid-cols-2 flex-col bg-muted antialiased">
      <Header />

      <div className="container mt-10">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

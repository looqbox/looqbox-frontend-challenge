import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { fetchPokemonIndex } from '../../features/pokemon/pokemonThunks';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';

export function AppLayout() {
  const dispatch = useAppDispatch();
  const { indexStatus } = useAppSelector((state) => state.pokemon);

  useEffect(() => {
    if (indexStatus === 'idle') dispatch(fetchPokemonIndex());
  }, [dispatch, indexStatus]);

  return (
    <div className="app-container">
      <div className="bg-parallax">
        <span className="pokeball pokeball-left" />
        <span className="pokeball pokeball-right" />
      </div>
      <Header />
      <Outlet />
    </div>
  );
}

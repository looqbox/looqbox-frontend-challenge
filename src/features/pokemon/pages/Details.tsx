import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useParams } from 'react-router';
import { fetchPokemonByName } from '../pokemonSlice';
import { useEffect } from 'react';

export function PokemonDetails() {
  const { name } = useParams();
  const dispatch = useAppDispatch();

  const { selected, loading, error } = useAppSelector((state) => state.pokemon);

  useEffect(() => {
    if (name) {
      dispatch(fetchPokemonByName(name));
    }
  }, [name]);

  if (loading) return <p>Carregando...</p>;

  if (error) return <p>{error}</p>;

  if (!selected) return null;

  return (
    <div>
      <h1>{selected.name}</h1>

      <img src={selected.sprites.front_default} alt={selected.name} />

      <p>Altura: {selected.height}</p>
      <p>Peso: {selected.weight}</p>
    </div>
  );
}

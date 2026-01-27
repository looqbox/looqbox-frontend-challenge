import { useEffect } from 'react';
import { Card, Skeleton } from 'antd';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { fetchPokemonDetails } from '../../features/pokemon/pokemonThunks';
import { PokemonImage } from '../../components/PokemonImage/PokemonImage';
import { formatPokemonName } from '../../shared/utils/formatPokemonName';

export function PokemonDetails() {
  const dispatch = useAppDispatch();
  const { name = '' } = useParams();

  const normalized = name.toLowerCase();

  const details = useAppSelector((state) => state.pokemon.detailsByName[normalized]);
  const status = useAppSelector((state) => state.pokemon.detailsStatusByName[normalized]);
  const error = useAppSelector((state) => state.pokemon.detailsErrorByName[normalized]);

  useEffect(() => {
    if (!normalized) return;
    if (!details) {
      dispatch(fetchPokemonDetails({ name: normalized }));
    }
  }, [dispatch, normalized, details]);

  if (status === 'loading' || !details) return <Skeleton active />;
  if (status === 'failed') return <div>{error}</div>;

  return (
    <Card title={formatPokemonName(details.name)}>
      <div>
        <PokemonImage id={details.id} name={formatPokemonName(details.name)} height={200} />
      </div>

      <div style={{ marginTop: 12 }}>
        <strong>Types:</strong> {details.types.map((t) => t.type.name).join(', ')}
      </div>

      <div style={{ marginTop: 8 }}>
        <strong>Abilities:</strong> {details.abilities.map((a) => a.ability.name).join(', ')}
      </div>
    </Card>
  );
}

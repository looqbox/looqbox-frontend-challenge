import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import {
  fetchPokemonDetails,
  fetchPokemonEvolutionChain,
  fetchPokemonSpecies,
} from '../../features/pokemon/pokemonThunks';
import { formatPokemonName } from '../../shared/utils/formatPokemonName';

import type { Status } from './PokemonDetailsView';
import { PokemonDetailsView } from './PokemonDetailsView';

export function PokemonDetails() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { name } = useParams<{ name: string }>();
  const normalized = name ? name.toLowerCase() : '';

  const index = useAppSelector((s) => s.pokemon.index);

  const details = useAppSelector((s) => s.pokemon.detailsByName[normalized]);
  const detailsStatus = useAppSelector(
    (s) => (s.pokemon.detailsStatusByName[normalized] ?? 'idle') as Status,
  );
  const detailsError = useAppSelector((s) => s.pokemon.detailsErrorByName[normalized] ?? null);

  const species = useAppSelector((s) => s.pokemon.speciesByName?.[normalized]);
  const speciesStatus = useAppSelector(
    (s) => (s.pokemon.speciesStatusByName?.[normalized] ?? 'idle') as Status,
  );
  const speciesError = useAppSelector((s) => s.pokemon.speciesErrorByName?.[normalized] ?? null);

  const evolution = useAppSelector((s) => s.pokemon.evolutionByName?.[normalized]);
  const evolutionStatus = useAppSelector(
    (s) => (s.pokemon.evolutionStatusByName?.[normalized] ?? 'idle') as Status,
  );
  const evolutionError = useAppSelector(
    (s) => s.pokemon.evolutionErrorByName?.[normalized] ?? null,
  );

  const displayName = useMemo(
    () => formatPokemonName(details?.name ?? normalized),
    [details?.name, normalized],
  );

  useEffect(() => {
    if (!normalized) return;

    if (!details && detailsStatus === 'idle') {
      dispatch(fetchPokemonDetails({ name: normalized }));
    }

    if (!species && speciesStatus === 'idle') {
      dispatch(fetchPokemonSpecies({ name: normalized }));
    }

    if (species?.evolutionChainUrl && !evolution && evolutionStatus === 'idle') {
      dispatch(
        fetchPokemonEvolutionChain({
          name: normalized,
          evolutionChainUrl: species.evolutionChainUrl,
        }),
      );
    }
  }, [
    dispatch,
    normalized,
    details,
    detailsStatus,
    species,
    speciesStatus,
    evolution,
    evolutionStatus,
  ]);

  const getPokemonIdByName = useMemo(() => {
    const map = new Map<string, number>();
    for (const p of index) map.set(p.name.toLowerCase(), p.id);

    return (pokemonName: string) => map.get(pokemonName.toLowerCase()) ?? null;
  }, [index]);

  return (
    <PokemonDetailsView
      normalized={normalized}
      displayName={displayName}
      onBack={() => navigate(-1)}
      getPokemonIdByName={getPokemonIdByName}
      details={{
        data: details,
        status: detailsStatus,
        error: detailsError,
      }}
      species={{
        data: species,
        status: speciesStatus,
        error: speciesError,
      }}
      evolution={{
        data: evolution,
        status: evolutionStatus,
        error: evolutionError,
      }}
    />
  );
}

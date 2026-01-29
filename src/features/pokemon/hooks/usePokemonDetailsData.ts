import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import {
  fetchPokemonDetails,
  fetchPokemonEvolutionChain,
  fetchPokemonSpecies,
} from '../pokemonThunks';
import { formatPokemonName } from '../../../shared/utils/formatPokemonName';

function clampPercent(v: number) {
  return Math.max(0, Math.min(100, v));
}

function statPercent(baseStat: number) {
  return clampPercent(Math.round((baseStat / 255) * 100));
}

function captureRatePercent(captureRate: number) {
  return clampPercent(Math.round((captureRate / 255) * 100));
}

export function usePokemonDetailsData(name: string) {
  const dispatch = useAppDispatch();
  const normalized = name.trim().toLowerCase();

  const details = useAppSelector((s) => s.pokemon.detailsByName[normalized]);
  const detailsStatus = useAppSelector((s) => s.pokemon.detailsStatusByName[normalized] ?? 'idle');
  const detailsError = useAppSelector((s) => s.pokemon.detailsErrorByName[normalized] ?? null);

  const species = useAppSelector((s) => s.pokemon.speciesByName[normalized]);
  const speciesStatus = useAppSelector((s) => s.pokemon.speciesStatusByName[normalized] ?? 'idle');
  const speciesError = useAppSelector((s) => s.pokemon.speciesErrorByName[normalized] ?? null);

  const evolution = useAppSelector((s) => s.pokemon.evolutionByName[normalized]);
  const evolutionStatus = useAppSelector(
    (s) => s.pokemon.evolutionStatusByName[normalized] ?? 'idle',
  );
  const evolutionError = useAppSelector((s) => s.pokemon.evolutionErrorByName[normalized] ?? null);

  const displayName = useMemo(() => {
    return formatPokemonName(details?.name ?? normalized);
  }, [details?.name, normalized]);

  useEffect(() => {
    if (!normalized) return;

    if (!details && detailsStatus === 'idle') {
      dispatch(fetchPokemonDetails({ name: normalized }));
    }

    if (!species && speciesStatus === 'idle') {
      dispatch(fetchPokemonSpecies({ name: normalized }));
    }
  }, [dispatch, normalized, details, detailsStatus, species, speciesStatus]);

  useEffect(() => {
    if (!normalized) return;
    if (!species?.evolutionChainUrl) return;

    if (!evolution && evolutionStatus === 'idle') {
      dispatch(
        fetchPokemonEvolutionChain({
          name: normalized,
          evolutionChainUrl: species.evolutionChainUrl,
        }),
      );
    }
  }, [dispatch, normalized, species?.evolutionChainUrl, evolution, evolutionStatus]);

  const anyFailed =
    detailsStatus === 'failed' || speciesStatus === 'failed' || evolutionStatus === 'failed';

  const anyError = detailsError ?? speciesError ?? evolutionError ?? 'Unknown error';

  const topTypes = useMemo(() => {
    if (!details) return [];
    return details.types
      .slice()
      .sort((a, b) => a.slot - b.slot)
      .map((t) => t.type.name);
  }, [details]);

  const stats = useMemo(() => {
    if (!details) {
      return {
        hp: 0,
        attack: 0,
        defense: 0,
        specialAttack: 0,
        specialDefense: 0,
        speed: 0,
        percents: {
          hp: 0,
          attack: 0,
          defense: 0,
          specialAttack: 0,
          specialDefense: 0,
          speed: 0,
        },
      };
    }

    const map = new Map<string, number>();
    details.stats.forEach((s) => map.set(s.stat.name, s.base_stat));

    const hp = map.get('hp') ?? 0;
    const attack = map.get('attack') ?? 0;
    const defense = map.get('defense') ?? 0;
    const specialAttack = map.get('special-attack') ?? 0;
    const specialDefense = map.get('special-defense') ?? 0;
    const speed = map.get('speed') ?? 0;

    return {
      hp,
      attack,
      defense,
      specialAttack,
      specialDefense,
      speed,
      percents: {
        hp: statPercent(hp),
        attack: statPercent(attack),
        defense: statPercent(defense),
        specialAttack: statPercent(specialAttack),
        specialDefense: statPercent(specialDefense),
        speed: statPercent(speed),
      },
    };
  }, [details]);

  const captureRate = species ? captureRatePercent(species.captureRate) : null;

  return {
    normalized,
    displayName,

    details,
    detailsStatus,
    detailsError,

    species,
    speciesStatus,
    speciesError,

    evolution,
    evolutionStatus,
    evolutionError,

    anyFailed,
    anyError,

    topTypes,
    stats,
    captureRate,
  };
}

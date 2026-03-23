import { useState, useCallback, useEffect } from 'react';
import { Pokemon, PokemonListItem } from '../types';
import { pokemonService } from '../services/pokemonService';
import { getIdFromUrl } from '../utils.ts';

const PAGE_SIZE = 24;

export const usePokemonSearch = () => {
  const [result, setResult] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (query: string) => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const data = await pokemonService.searchByName(query);
      setResult(data);
    } catch (err) {
      setError(`Não foi possível encontrar o Pokémon "${query}". Verifique o nome e tente novamente.`);
    } finally {
      setLoading(false);
    }
  }, []);

  const clear = useCallback(() => {
    setResult(null);
    setError(null);
  }, []);

  return { result, loading, error, search, clear };
}

export const usePokemonList = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const fetchPage = useCallback(async (page: number) => {
    setLoading(true);
    setError(null);
    try {
      const offset = (page - 1) * PAGE_SIZE;

      const list = await pokemonService.getList(PAGE_SIZE, offset);
      setTotal(list.count);

      const details = await Promise.all(
        list.results.map((item: PokemonListItem) =>
          pokemonService.getById(getIdFromUrl(item.url))
        )
      );
      setPokemon(details);
    } catch (err) {
      setError('Não foi possível carregar a lista de Pokémon. Tente novamente em breve.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPage(page);
  }, [fetchPage, page]);

  return { pokemon, loading, error, total, page, setPage, pageSize: PAGE_SIZE };
}

export const usePokemonDetails = (nameOrId: string | number) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false
    const fetch = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = typeof nameOrId === 'number'
          ? await pokemonService.getById(nameOrId)
          : await pokemonService.searchByName(nameOrId);
        if (!cancelled) setPokemon(data);

      } catch {
        if (!cancelled) setError(`Não foi possível carregar os detalhes do Pokémon.`);

      } finally {
        if (!cancelled) setLoading(false);
      }
      return () => { cancelled = true };
    }
    fetch()

  }, [nameOrId]);
  return { pokemon, loading, error };
}

import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../services/pokemonService';
import { AppDispatch, RootState } from '../store/store'
import { setPokemons, setLoading, setPagination, setTotal } from '../store/pokemonSlice'

const ITEMS_PER_PAGE = 9;

const useFetchPokemons = () => {
  const dispatch = useDispatch<AppDispatch>();
  const pagination = useSelector((state: RootState) => state.pokemon.pagination)
  const total = useSelector((state: RootState) => state.pokemon.total)
  const [error, setError] = useState<string | null>(null);

  const startAt = useMemo(() => (pagination - 1) * ITEMS_PER_PAGE, [pagination])

  useEffect(() => {
    const loadPokemons = async () => {
      dispatch(setLoading(true))
      setError(null);
      try {
        const { data, total } = await fetchPokemons(startAt, ITEMS_PER_PAGE);
        dispatch(setPokemons(data))
        dispatch(setTotal(total))
      } catch (err) {
        setError("Erro ao buscar os Pokémons.");
      } finally {
        dispatch(setLoading(false))
      }
    };

    loadPokemons();
  }, [pagination]);

  const nextPage = () => {
    if (pagination < Math.floor(total / ITEMS_PER_PAGE) - 1) {
      dispatch(setPagination(pagination + 1))
    }
  };

  const prevPage = () => {
    if (pagination > 0) {
      dispatch(setPagination(pagination - 1))
    }
  };

  return { error, nextPage, prevPage, pagination, itemsPerPage: ITEMS_PER_PAGE, totalPages: total };
};

export default useFetchPokemons;

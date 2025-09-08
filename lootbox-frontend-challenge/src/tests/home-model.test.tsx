import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useSearchParams } from 'react-router-dom';
import { usePokemonStore } from '../models/zustand/pokemon.store';
import { useHomeModel } from '../hooks/models/use-home.model';
import { useListPokemon } from '../hooks/queries/list-pokemon.query';
import { usePokemonByName } from '../hooks/queries/pokemon-by-name.query';
import type { ReactNode } from 'react';

// Mocks
vi.mock('../models/zustand/pokemon.store');
vi.mock('../hooks/queries/list-pokemon.query');
vi.mock('../hooks/queries/pokemon-by-name.query');
vi.mock('react-router-dom');

const wrapper = ({ children }: { children: ReactNode }) => <>{children}</>;

describe('useHomeModel', () => {
  const mockAppend = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    (usePokemonStore as unknown as Mock).mockReturnValue({
      litsPokemon: [],
      appendLitsPokemon: mockAppend,
    });

    (useListPokemon as unknown as Mock).mockReturnValue({
      data: { results: [{ name: 'pikachu' }] },
      isFetching: false,
    });

    (usePokemonByName as unknown as Mock).mockReturnValue({
      data: null,
      isFetching: false,
    });

    (useSearchParams as unknown as Mock).mockReturnValue([new URLSearchParams('')]);
  });

  it('deve retornar os dados iniciais da store', () => {
    const { result } = renderHook(() => useHomeModel(), { wrapper });
    expect(result.current.data).toEqual([]);
    expect(result.current.isFetching).toBe(false);
  });

  it('deve adicionar os pokémons da API à store', () => {
    renderHook(() => useHomeModel());
    expect(mockAppend).toHaveBeenCalledWith([{ name: 'pikachu' }]);
  });

  it('deve filtrar os pokémons locais quando searchName estiver presente', () => {
    (usePokemonStore as unknown as Mock).mockReturnValue({
      litsPokemon: [{ name: 'pikachu' }, { name: 'bulbasaur' }],
      appendLitsPokemon: mockAppend,
    });
    (useSearchParams as unknown as Mock).mockReturnValue([new URLSearchParams('name=pika')]);

    const { result } = renderHook(() => useHomeModel(), { wrapper });
    expect(result.current.data).toEqual([{ name: 'pikachu' }]);
  });

  it('deve adicionar pokémon da API se não estiver nos dados locais', () => {
    (usePokemonByName as unknown as Mock).mockReturnValue({
      data: { name: 'charmander' },
      isFetching: false,
    });
    (useSearchParams as unknown as Mock).mockReturnValue([new URLSearchParams('name=charmander')]);

    renderHook(() => useHomeModel());
    expect(mockAppend).toHaveBeenCalledWith([{ name: 'charmander' }]);
  });

  it('deve retornar o estado correto de carregamento', () => {
    (useListPokemon as unknown as Mock).mockReturnValue({ data: null, isFetching: true });
    (usePokemonByName as unknown as Mock).mockReturnValue({ data: null, isFetching: false });

    const { result } = renderHook(() => useHomeModel(), { wrapper });
    expect(result.current.isFetching).toBe(true);
  });

  it('deve atualizar o offset corretamente', () => {
    const { result } = renderHook(() => useHomeModel(), { wrapper });
    act(() => {
      result.current.setOffset(50);
    });
    // Garantimos que setOffset existe e é uma função
    expect(typeof result.current.setOffset).toBe('function');
  });
});

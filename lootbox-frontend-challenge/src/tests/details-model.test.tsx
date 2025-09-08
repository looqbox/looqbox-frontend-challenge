import { act, renderHook } from '@testing-library/react';
import { type ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi, type Mock } from 'vitest';
import { useDevice } from '../hooks/device';
import { useDetailModel } from '../hooks/models/use-details.model';
import { useDetailsPokemonByName as detailsPokemonByName } from '../hooks/queries/details-pokemon';
import { usePokemonStore } from '../models/zustand/pokemon.store';

// Mocks
vi.mock('../models/zustand/pokemon.store');
vi.mock('../hooks/device');
vi.mock('../hooks/queries/details-pokemon');
vi.mock('react-router-dom');

describe('useDetailModel', () => {
  const mockPokemonFromCompare = 'bulbasaur';

  const wrapper = ({ children }: { children: ReactNode }) => <>{children}</>;

  beforeEach(() => {
    vi.clearAllMocks();

    (usePokemonStore as unknown as Mock).mockReturnValue({
      pokemonFromCompare: mockPokemonFromCompare,
    });

    (useParams as unknown as Mock).mockReturnValue({
      pokemon: 'pikachu',
    });

    (useDevice as unknown as Mock).mockReturnValue('desktop');

    (detailsPokemonByName as unknown as Mock).mockImplementation(({ searchName }) => {
      if (searchName === 'pikachu') return { data: { name: 'pikachu', type: 'electric' } };
      if (searchName === mockPokemonFromCompare)
        return { data: { name: 'bulbasaur', type: 'grass' } };
      return { data: null };
    });
  });

  it('deve retornar os pokémons principais e secundários corretamente', () => {
    const { result } = renderHook(() => useDetailModel(), { wrapper });

    expect(result.current.mainPokemon).toEqual({ name: 'pikachu', type: 'electric' });
    expect(result.current.secondaryPokemon).toEqual({ name: 'bulbasaur', type: 'grass' });
  });

  it('deve retornar o estado inicial do modal como fechado', () => {
    const { result } = renderHook(() => useDetailModel(), { wrapper });
    expect(result.current.openModal).toBe(false);
  });

  it('deve permitir abrir e fechar o modal', () => {
    const { result } = renderHook(() => useDetailModel(), { wrapper });

    act(() => {
      result.current.setOpenModal(true);
    });
    expect(result.current.openModal).toBe(true);

    act(() => {
      result.current.setOpenModal(false);
    });
    expect(result.current.openModal).toBe(false);
  });

  it('deve retornar o device correto', () => {
    const { result } = renderHook(() => useDetailModel(), { wrapper });
    expect(result.current.device).toBe('desktop');
  });

  it('deve retornar o nome correto do pokemon e pokemonFromCompare', () => {
    const { result } = renderHook(() => useDetailModel(), { wrapper });
    expect(result.current.name).toBe('pikachu');
    expect(result.current.pokemonFromCompare).toBe(mockPokemonFromCompare);
  });
});

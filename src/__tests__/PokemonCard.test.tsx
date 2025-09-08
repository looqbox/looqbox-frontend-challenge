import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import PokemonCard from '../components/PokemonCard';
import type { Pokemon } from '../types/pokemon';

const mockPokemon = {
  id: 25,
  name: 'pikachu',
  height: 4,
  weight: 60,
  base_experience: 112,
  sprites: {
    front_default: 'front.png',
    other: { 'official-artwork': { front_default: 'artwork.png' } },
  },
  types: [{ slot: 1, type: { name: 'electric', url: '' } }],
  stats: [
    { base_stat: 35, stat: { name: 'hp', url: '' } },
    { base_stat: 55, stat: { name: 'attack', url: '' } },
    { base_stat: 40, stat: { name: 'defense', url: '' } },
  ],
} as Pokemon;

const mockPokemonMultipleTypes = {
  ...mockPokemon,
  types: [
    { slot: 1, type: { name: 'electric', url: '' } },
    { slot: 2, type: { name: 'flying', url: '' } },
  ],
} as Pokemon;

describe('PokemonCard', () => {
  const defaultProps = {
    isLoading: false,
    onClick: vi.fn(),
    hasError: false,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('when loading', () => {
    it('renders skeleton when isLoading is true', () => {
      render(
        <PokemonCard {...defaultProps} pokemon={mockPokemon} isLoading={true} />
      );

      expect(screen.getByTestId('pokemon-card-skeleton')).toBeInTheDocument();
      expect(screen.queryByText(/Pikachu/i)).not.toBeInTheDocument();
    });

    it('renders skeleton when pokemon is undefined', () => {
      render(
        <PokemonCard {...defaultProps} pokemon={undefined} isLoading={false} />
      );

      expect(screen.getByTestId('pokemon-card-skeleton')).toBeInTheDocument();
    });
  });

  describe('when loaded successfully', () => {
    it('renders pokemon basic information correctly', () => {
      render(<PokemonCard {...defaultProps} pokemon={mockPokemon} />);

      expect(screen.getByText(/Pikachu/i)).toBeInTheDocument();
      expect(screen.getByText('#025')).toBeInTheDocument();
      expect(screen.getByText(/Altura:/i)).toHaveTextContent('Altura: 0.4m');
      expect(screen.getByText(/Peso:/i)).toHaveTextContent('Peso: 6kg');
    });

    it('renders pokemon stats correctly', () => {
      render(<PokemonCard {...defaultProps} pokemon={mockPokemon} />);

      expect(screen.getByText('HP')).toBeInTheDocument();
      expect(screen.getByText('35')).toBeInTheDocument();
      expect(screen.getByText('ATK')).toBeInTheDocument();
      expect(screen.getByText('55')).toBeInTheDocument();
      expect(screen.getByText('DEF')).toBeInTheDocument();
      expect(screen.getByText('40')).toBeInTheDocument();
    });

    it('renders single pokemon type as tag', () => {
      render(<PokemonCard {...defaultProps} pokemon={mockPokemon} />);

      expect(screen.getByText(/Electric/i)).toBeInTheDocument();
    });

    it('renders multiple pokemon types as tags', () => {
      render(
        <PokemonCard {...defaultProps} pokemon={mockPokemonMultipleTypes} />
      );

      expect(screen.getByText(/Electric/i)).toBeInTheDocument();
      expect(screen.getByText(/Flying/i)).toBeInTheDocument();
    });

    it('renders pokemon image with correct src', () => {
      render(<PokemonCard {...defaultProps} pokemon={mockPokemon} />);

      const image = screen.getByAltText('pikachu') as HTMLImageElement;
      expect(image).toBeInTheDocument();
      expect(image.src).toContain('artwork.png');
    });
  });

  describe('PokemonCard interactions', () => {
    it('calls onClick with pokemon when card is clicked', () => {
      const mockOnClick = vi.fn();
      render(
        <PokemonCard
          {...defaultProps}
          onClick={mockOnClick}
          pokemon={mockPokemon}
        />
      );

      fireEvent.click(screen.getByText(/Pikachu/i));
      expect(mockOnClick).toHaveBeenCalledTimes(1);
      expect(mockOnClick).toHaveBeenCalledWith(mockPokemon);
    });

    it('does not call onClick when loading', () => {
      const mockOnClick = vi.fn();
      render(
        <PokemonCard
          {...defaultProps}
          onClick={mockOnClick}
          pokemon={mockPokemon}
          isLoading={true}
        />
      );

      const skeleton = screen.getByTestId('pokemon-card-skeleton');
      fireEvent.click(skeleton);
      expect(mockOnClick).not.toHaveBeenCalled();
    });
  });
});

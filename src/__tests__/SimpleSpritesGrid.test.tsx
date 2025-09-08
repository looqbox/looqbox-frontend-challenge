import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SimpleSpritesGrid from '../components/SimpleSpritesGrid';
import type { PokemonSprites } from '../types/pokemon';

describe('SimpleSpritesGrid', () => {
  const mockSprites: PokemonSprites = {
    front_default: 'front.png',
    back_default: 'back.png',
    other: {
      showdown: {
        front_default: 'showdown_front.png',
        back_default: 'showdown_back.png',
      },
    },
  } as PokemonSprites;

  it('renders four images correctly', () => {
    render(<SimpleSpritesGrid sprites={mockSprites} />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(4);

    expect(images[0]).toHaveAttribute('src', 'showdown_front.png');
    expect(images[1]).toHaveAttribute('src', 'showdown_back.png');
    expect(images[2]).toHaveAttribute('src', 'front.png');
    expect(images[3]).toHaveAttribute('src', 'back.png');
  });

  it('renders without crashing even if some sprites are null', () => {
    const partialSprites: PokemonSprites = {
      front_default: null,
      back_default: null,
      other: { showdown: { front_default: null, back_default: null } },
    } as PokemonSprites;

    render(<SimpleSpritesGrid sprites={partialSprites} />);

    const containers = screen.getAllByText(/N\/A/i);
    expect(containers).toHaveLength(4);
  });
});

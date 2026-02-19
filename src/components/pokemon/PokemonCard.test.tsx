import * as React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { PokemonCard } from './PokemonCard';

const originalConsoleError = console.error;
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation((...args: any[]) => {
    const msg = args[0];
    if (typeof msg === 'string' && msg.includes('[antd: Card] `bodyStyle` is deprecated')) {
      return;
    }
    originalConsoleError(...args);
  });

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }),
  });
});

afterAll(() => {
  (console.error as jest.Mock).mockRestore?.();
});

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

const useThemeMock = jest.fn();
jest.mock('../../hooks/useTheme', () => ({
  useTheme: () => useThemeMock(),
}));

jest.mock('../../utils/typeColors', () => ({
  typeColors: {
    grass: '#00FF00',
    poison: '#AA00AA',
    fire: '#FF0000',
  },
}));

const formatPokemonNameMock = jest.fn((name: string) => `Formatted ${name}`);
jest.mock('../../utils/formatName', () => ({
  formatPokemonName: (name: string) => formatPokemonNameMock(name),
}));

const pokemon = {
  id: 1,
  name: 'bulbasaur',
  sprites: {
    other: {
      'official-artwork': {
        front_default: 'https://example.com/bulbasaur.png',
      },
    },
  },
  types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
} as any;

describe('PokemonCard', () => {
  beforeEach(() => {
    mockNavigate.mockReset();
    useThemeMock.mockReset();
    formatPokemonNameMock.mockClear();
  });

  it('should render pokemon info in light mode', () => {
    useThemeMock.mockReturnValue({ isDarkMode: false });

    const { container, getByText, getByAltText } = render(<PokemonCard pokemon={pokemon} />);

    expect(formatPokemonNameMock).toHaveBeenCalledWith('bulbasaur');
    expect(getByText('Formatted bulbasaur')).toBeInTheDocument();

    expect(getByText('#001')).toBeInTheDocument();

    const img = getByAltText('bulbasaur') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/bulbasaur.png');

    expect(getByText('GRASS')).toBeInTheDocument();
    expect(getByText('POISON')).toBeInTheDocument();

    expect(getByText('GRASS')).toHaveStyle('background-color: #00FF00');
    expect(getByText('POISON')).toHaveStyle('background-color: #AA00AA');

    const card = container.querySelector('.ant-card') as HTMLElement;
    expect(card).toHaveStyle('background-color: #FFFFFF');

    const topSection = img.parentElement as HTMLElement;
    const styleAttr = topSection.getAttribute('style') || '';
    expect(styleAttr).toMatch(/background:\s*rgba\(0,\s*255,\s*0,\s*0\.1[45]\)/);
  });

  it('should render styles in dark mode', () => {
    useThemeMock.mockReturnValue({ isDarkMode: true });

    const { container, getByText, getByAltText } = render(<PokemonCard pokemon={pokemon} />);

    const img = getByAltText('bulbasaur') as HTMLImageElement;
    const topSection = img.parentElement as HTMLElement;

    const styleAttr = topSection.getAttribute('style') || '';
    expect(styleAttr).toMatch(/background:\s*rgb\(36,\s*36,\s*36\)/);

    const card = container.querySelector('.ant-card') as HTMLElement;
    expect(card).toHaveStyle('background-color: #1F1F1F');

    const title = getByText('Formatted bulbasaur');
    expect(title).toHaveStyle('color: rgba(255,255,255,0.85)');
  });

  it('should navigate to pokemon details when card is clicked', async () => {
    useThemeMock.mockReturnValue({ isDarkMode: false });

    const user = userEvent.setup();
    const { getByText } = render(<PokemonCard pokemon={pokemon} />);

    await user.click(getByText('Formatted bulbasaur'));

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/pokemon/bulbasaur');
  });
});

import { TypeName } from "../types";

export const TYPE_COLORS: Record<TypeName, string> = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#EE99AC',
};

export const COLOR_TO_EMOJI: Record<string, string> = {
  '#A8A878': '✨',
  '#F08030': '🔥',
  '#6890F0': '💧',
  '#F8D030': '⚡',
  '#78C850': '🌿',
  '#98D8D8': '❄️',
  '#C03028': '⚔️',
  '#A040A0': '🧪',
  '#E0C068': '🌱',
  '#A890F0': '🪽',
  '#F85888': '🧠',
  '#A8B820': '🪲',
  '#B8A038': '🪨',
  '#705898': '👻',
  '#7038F8': '🐉',
  '#705848': '🖤',
  '#B8B8D0': '🔒',
  '#EE99AC': '🧚',
};

export const getEmojiFromColor = (color: string): string => {
  return COLOR_TO_EMOJI[color] || '✨';
};

export const getTypeColor = (type: string): string => {
  return TYPE_COLORS[type as TypeName] || '#777';
};

export const formatPokemonId = (id: number): string => {
  return `#${id.toString().padStart(4, '0')}`;
};

export const getIdFromUrl = (url: string): number => {
  const parts = url.split('/').filter(Boolean);
  return parseInt(parts[parts.length - 1], 10);
};

export const formatStatName = (stat: string) => {
  const map: Record<string, string> = {
    hp: 'HP',
    attack: 'ATK',
    defense: 'DEF',
    'special-attack': 'Sp.ATK',
    'special-defense': 'Sp.DEF',
    speed: 'SPD'
  }
  return map[stat] || stat
};
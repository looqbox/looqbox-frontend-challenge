/**
 * Formats Pokémon names for display.
 *
 * Examples:
 * - "mr-mime"   -> "Mr Mime"
 * - "ho-oh"     -> "Ho-Oh"
 * - "nidoran-f" -> "Nidoran ♀️"
 * - "nidoran-m" -> "Nidoran ♂️"
 */
const KEEP_HYPHEN_NAMES = new Set(['ho-oh', 'porygon-z', 'jangmo-o', 'hakamo-o', 'kommo-o']);

export function formatPokemonName(slug: string) {
  if (!slug) return '';

  if (KEEP_HYPHEN_NAMES.has(slug)) {
    return slug
      .split('-')
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join('-');
  }

  return slug
    .split('-')
    .map((part) => {
      if (part === 'mr') return 'Mr';
      if (part === 'jr') return 'Jr';
      if (part === 'f') return '♀️';
      if (part === 'm') return '♂️';
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(' ');
}

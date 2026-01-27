/**
 * Formats Pokémon names for display.
 *
 * Examples:
 * - "mr-mime"   -> "Mr Mime"
 * - "ho-oh"     -> "Ho-Oh"
 * - "nidoran-f" -> "Nidoran ♀"
 */
export function formatPokemonName(name: string): string {
  if (!name) return '';

  return name
    .split('-')
    .map((part) => {
      // special cases
      if (part === 'mr') return 'Mr';
      if (part === 'jr') return 'Jr';
      if (part === 'f') return '♀️';
      if (part === 'm') return '♂️';

      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(' ');
}

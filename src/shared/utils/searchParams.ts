/**
 * Builds search params for Pokémon list routes.
 *
 * - Omits empty values
 * - Ensures consistent query param structure
 */
export function buildPokemonListSearchParams(params: { q?: string; page?: number }) {
  const sp: Record<string, string> = {};
  if (params.q && params.q.trim()) sp.q = params.q.trim();
  if (params.page && params.page > 0) sp.page = String(params.page);
  return sp;
}

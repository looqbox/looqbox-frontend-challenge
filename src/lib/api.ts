export async function api(path: string, init?: RequestInit) {
  const baseUrl = "https://pokeapi.co";
  const url = new URL("/api/v2" + path, baseUrl);

  return fetch(url, init);
}

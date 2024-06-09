class APIClient {
  _baseUrl: string;

  constructor(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  async get<T>(path: string) {
    const response = await fetch(`${this._baseUrl}${path}`, { method: "GET" });
    return (await response.json()) as T;
  }
}

// TODO: jogar no .env depois
export default new APIClient("https://pokeapi.co/api/v2");

import axios from "axios";

export function getAxiosClient() {
  const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    headers: {
      "Content-Type": "application/json"
    }
  });

  return api;
}

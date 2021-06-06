import axios from "axios";

/**
   * @description Instancia do axios `AxiosInstance`, com a BaseUrl da PokeApi
   */
export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
});
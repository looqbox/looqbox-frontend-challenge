import { AxiosInstance } from "axios";
import { getAxiosClient } from "./axios";

export default class ApiClient {
  public axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = getAxiosClient();
  }

  async get<T = any>(url: string, data = {}): Promise<T> {
    return this.axiosInstance
      .get(url, data)
      .then((response) => response.data as T);
  }
}

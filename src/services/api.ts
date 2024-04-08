import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

import { BASE_URL } from "@/services/endpoints";

export const api = axios.create({
  baseURL: BASE_URL,
});

export const queryClient = new QueryClient();

import axios, { AxiosError, type AxiosRequestConfig } from 'axios';
export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

const axiosRetry = async (
  config: AxiosRequestConfig,
  retries = MAX_RETRIES
): Promise<any> => {
  try {
    return await axios(config);
  } catch (error) {
    if (retries > 0 && axios.isAxiosError(error)) {
      if (!error.response || error.code === 'ECONNABORTED') {
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
        return axiosRetry(config, retries - 1);
      }
    }
    throw error;
  }
};

pokeApi.interceptors.request.use((config) => {
  return { ...config, retry: true };
});

pokeApi.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const config = error.config as AxiosRequestConfig & { _retry?: boolean };

    if (!config._retry && (!error.response || error.code === 'ECONNABORTED')) {
      config._retry = true;

      try {
        return await axiosRetry(config, MAX_RETRIES - 1);
      } catch (retryError) {
        throw new Error('Falha na conexão após várias tentativas');
      }
    }

    if (error.response) {
      const status = error.response.status;

      switch (status) {
        case 404:
          throw new Error('Recurso não encontrado');
        case 500:
          throw new Error('Erro no servidor. Tente novamente mais tarde');
        case 503:
          throw new Error('Serviço temporariamente indisponível');
        default:
          throw new Error(`Erro ${status}: Algo deu errado`);
      }
    } else if (error.request) {
      throw new Error('Sem resposta do servidor. Verifique sua conexão');
    } else {
      throw new Error('Erro ao processar requisição');
    }
  }
);

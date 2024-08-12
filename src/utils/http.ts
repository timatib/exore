import Axios, { AxiosRequestConfig } from "axios";

const defaultConfig = {
  baseURL: "https://fakestoreapi.com",
  withCredentials: false,
};

const http = Axios.create(defaultConfig);

function GET(url: string, config: AxiosRequestConfig = {}) {
  return http.get(url, {
    ...config,
    headers: {
      ...config?.headers,
    },
  });
}

export { GET }

export default http
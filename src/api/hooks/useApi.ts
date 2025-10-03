import { useCallback, useState } from "react";
import axios from "axios";

type Props = {
  baseUrl: string;
};

const useApi = ({ baseUrl }: Props) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //https://68d6c1e9c2a1754b426bced4.mockapi.io/taskBook/:endpoint

  const api = axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const request = useCallback(
    async (method: string, endpoint: string, body = null, config = {}) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await api.request({
          method,
          url: endpoint,
          data: body,
          ...config,
        });
        return response.data;
      } catch (error: any) {
        setError(error.message || error.toString());
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [api]
  );

  const GET = useCallback(
    async (endpoint: string, config = {}) =>
      request("get", endpoint, null, config),
    [request]
  );

  const POST = useCallback(
    async (endpoint: string, body: any) => request("post", endpoint, body),
    [request]
  );

  const PUT = useCallback(
    async (endpoint: string, body: any) => request("put", endpoint, body),
    [request]
  );

  const DELETE = useCallback(
    async (endpoint: string) => request("DELETE", endpoint),
    [request]
  );
  return { GET, POST, PUT, DELETE, error, isLoading, data };
};
export default useApi;

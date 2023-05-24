import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Product } from '../types/Products';

const baseURL = 'http://localhost:3000';

type Data = Product | null;
type Error = string;

interface FetchResult {
  data: Data;
  loading: boolean;
  error: Error;
}

export const useFetch = (url: string): FetchResult => {
  const [data, setData] = useState<Data>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<Data> = await axios.get(`${baseURL}${url}`);
        setData(response.data);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

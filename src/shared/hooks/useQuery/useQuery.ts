import { useState } from 'react';
import { AxiosError } from 'axios';

interface IStateProps<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

const useQuery = <Output>(fn: () => Promise<Output>) => {
  const [state, setState] = useState<IStateProps<Output>>({
    data: null,
    isLoading: true,
    error: null,
  });
  const runQuery = async () => {
    setState(s => ({ ...s, isLoading: true }));
    try {
      const data = await fn();
      setState(prev => ({
        ...prev,
        data: data,
        isLoading: false,
        error: null,
      }));
    } catch (error: unknown) {
      setState(s => ({
        ...s,
        data: null,
        isLoading: false,
        error: (error as AxiosError)?.message || 'Beda beda',
      }));
      console.log('sdfd');
    }
  };

  return { ...state, runQuery };
};
export default useQuery;

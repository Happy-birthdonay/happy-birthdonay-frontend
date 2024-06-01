import useSWR from 'swr';

import { fetcher } from '../../../fetcher';

export const useUser = () => {
  const { data, error, isLoading } = useSWR(`/api/users`, fetcher, {
    revalidateOnFocus: false,
    suspense: true,
  });
  return { data, error, isLoading };
};

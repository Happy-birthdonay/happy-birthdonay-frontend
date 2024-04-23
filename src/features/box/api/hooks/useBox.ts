import useSWR from 'swr';

import { fetcher } from '../../../fetcher';

export const useBox = (boxId: number) => {
  const { data, error, isLoading } = useSWR(`/api/donation-boxes/${boxId}`, fetcher, { revalidateOnFocus: false });
  return { data, error, isLoading };
};

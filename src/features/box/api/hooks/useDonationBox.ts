import useSWR from 'swr';

import { fetcher } from '@/features/fetcher';

export const useDonationBox = (boxId: string) => {
  const { data, isLoading, error } = useSWR(`/api/donation-boxes/${boxId}`, fetcher, {
    suspense: true,
    revalidateOnFocus: false,
  });

  return {
    box: data?.data ?? null,
    isLoading,
    error,
  };
};

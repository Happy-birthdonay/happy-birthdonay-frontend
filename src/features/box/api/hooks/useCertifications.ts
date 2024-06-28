import useSWR from 'swr';

import { fetcher } from '@/features/fetcher';

export const useCertification = (boxId: string) => {
  const { data, isLoading, error } = useSWR(`/api/certifications/${boxId}`, fetcher, {
    suspense: true,
    revalidateOnFocus: false,
  });
  console.log('data', data);
  return {
    certification: data?.data ?? null,
    isLoading,
    error,
  };
};

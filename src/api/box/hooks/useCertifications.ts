import useSWR from 'swr';

import { fetcher } from '@/api/fetcher';

export const useCertification = (boxId: string) => {
  const { data, isLoading, error } = useSWR(`/api/certifications?boxId=${boxId}`, fetcher, {
    suspense: true,
    revalidateOnFocus: false,
  });

  return {
    certification: data?.data ?? null,
    isLoading,
    error,
  };
};

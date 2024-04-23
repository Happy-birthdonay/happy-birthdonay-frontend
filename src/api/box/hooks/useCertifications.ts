import useSWR from 'swr';

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

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

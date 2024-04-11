import useSWR from 'swr';

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useDonationBox = (boxId: string) => {
  const { data, isLoading, error } = useSWR(`/api/donation-boxes/${boxId}`, fetcher, {
    suspense: true,
    revalidateOnFocus: false,
  });

  return {
    box: data.data,
    isLoading,
    error,
  };
};

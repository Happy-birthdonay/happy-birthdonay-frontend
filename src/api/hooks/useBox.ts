import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useBox = (boxId: number) => {
  const { data, error, isLoading } = useSWR(`/api/donation-boxes/${boxId}`, fetcher);
  return { data, error, isLoading };
};

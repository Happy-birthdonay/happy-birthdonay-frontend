import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

// Get a new searchParams string by merging the current
// searchParams with a provided key/value pair
export const useCreateQueryString = (key: string, value: string) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const newQueryString = pathname + '?' + createQueryString(key, value);
  return { createQueryString, newQueryString };
};

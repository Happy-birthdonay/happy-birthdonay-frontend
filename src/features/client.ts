'use server';

import { cookies } from 'next/headers';

const client = (url: string, options: RequestInit) => {
  options.headers = {
    ...options.headers,
    'Content-Type': 'application/json',
    Authorization: `Bearer ${cookies().get('access_token')?.value}`,
  };
  return fetch(url, options);
};

export default client;

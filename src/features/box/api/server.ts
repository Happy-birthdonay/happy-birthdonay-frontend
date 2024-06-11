import client from '../../client';

import type ApiResponse from '@/shared/types/api-response';

export const getBoxList = async (): Promise<ApiResponse.ResponseBoxList> => {
  const baseUrl = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_BASE_URL : '/api';

  const response = await client(`${baseUrl}/donation-boxes`, {
    method: 'GET',
  });

  return await response.json();
};

export const getBoxDetailGuest = async (boxId: number) => {
  const baseUrl = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_BASE_URL : '/api';

  const response = await client(`${baseUrl}/donation-boxes/${boxId}/guest`, {
    method: 'GET',
  });

  return await response.json();
};

export const getBoxDetail = async (boxId: number) => {
  const baseUrl = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_BASE_URL : '/api';

  const response = await client(`${baseUrl}/donation-boxes/${boxId}`, {
    method: 'GET',
  });

  return await response.json();
};

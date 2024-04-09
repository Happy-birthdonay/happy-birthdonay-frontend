import ApiResponse from '@/types/api-response';
import { DonationBox } from '@/types/donationBox';
import client from '../client';

export const getBoxList = async (): Promise<ApiResponse.ResponseBoxList> => {
  const baseUrl = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_BASE_URL : '/api';

  const response = await client(`${baseUrl}/donation-boxes`, {
    method: 'GET',
  });

  return response.json();
};

export const getBoxDetailGuest = async (boxId: number) => {
  const baseUrl = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_BASE_URL : '/api';

  const response = await client(`${baseUrl}/donation-boxes/${boxId}/guest`, {
    method: 'GET',
    cache: 'force-cache',
  });

  return response.json();
};

export const getBoxDetail = async (boxId: number) => {
  const baseUrl = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_BASE_URL : '/api';

  const response = await client(`${baseUrl}/donation-boxes/${boxId}`, {
    method: 'GET',
    cache: 'force-cache',
  });

  return response.json();
};

import client from '@/features/client';
import ApiResponse from '@/shared/types/api-response';

export const getUser = async (): Promise<ApiResponse.ResponseUser> => {
  const baseUrl = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_BASE_URL : '/api';

  const response = await client(`${baseUrl}/donation-boxes`, {
    method: 'GET',
  });

  return await response.json();
};

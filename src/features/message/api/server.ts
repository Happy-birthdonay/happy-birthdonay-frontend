import ApiResponse from '@/shared/types/api-response';
import client from '../../client';

export const getMessageList = async (boxId: number): Promise<ApiResponse.ResponseMessageList> => {
  const baseUrl = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_BASE_URL : '/api';

  const response = await client(`${baseUrl}/messages?boxId=${boxId}`, {
    method: 'GET',
  });
  return response.json();
};

import client from '../client';

export const getMessageList = async () => {
  const baseUrl = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_BASE_URL : '/api';

  const response = await client(`${baseUrl}/messages`, {
    method: 'GET',
  });
  return response.json();
};

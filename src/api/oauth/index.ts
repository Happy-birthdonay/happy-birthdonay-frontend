import ApiResponse from '@/types/api-response';

export const postOauthToken = async (code: string | null): Promise<ApiResponse.ResponseAuthTokenData> => {
  const baseUrl = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_BASE_URL : '/api';
  const response = await fetch(`${baseUrl}/oauth/token`, {
    method: 'POST',
    body: JSON.stringify({ code }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

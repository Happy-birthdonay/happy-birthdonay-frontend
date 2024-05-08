import ApiResponse from '@/shared/types/api-response';

const baseUrl = '/api';

export const postOauthToken = async (code: string | null): Promise<ApiResponse.ResponseAuthTokenData> => {
  const response = await fetch(`${baseUrl}/oauth/token`, {
    method: 'POST',
    body: JSON.stringify({ code }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    return { result: 'failed', message: response.statusText, statusCode: response.status };
  }
  return await response.json();
};

export const refreshOauthToken = async (): Promise<ApiResponse.ResponseAuthTokenData> => {
  const response = await fetch(`${baseUrl}/oauth/refresh`, {
    method: 'GET',

    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
};

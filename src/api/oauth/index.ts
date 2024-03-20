export const postOauthToken = async <T>(code: string): Promise<T> => {
  const response = await fetch('/api/oauth/token', {
    method: 'POST',
    body: JSON.stringify({ code }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

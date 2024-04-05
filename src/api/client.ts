import getCookie from '@/utils/getCookie';

const client = (url: string, options: RequestInit) => {
  const access_token = getCookie('access_token');
  options.headers = {
    ...options.headers,
    'Content-Type': 'application/json',
    Authorization: `Bearer ${access_token}`,
  };
  return fetch(url, options);
};

export default client;

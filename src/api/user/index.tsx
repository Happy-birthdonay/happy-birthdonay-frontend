import { type User } from '@/types/user';

export const signUp = async (data: User) => {
  const baseUrl = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_BASE_URL : '/api';

  const response = await fetch(`${baseUrl}/sign-up`, {
    method: 'PATCH',
    body: JSON.stringify({ name: data.name, birthday: data.birthday }),
  });
  return response.json();
};

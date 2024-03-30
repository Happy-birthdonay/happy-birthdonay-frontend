import { type DonationBox } from '@/types/donationBox';

export const postNewBox = async (box: DonationBox) => {
  const baseUrl = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_BASE_URL : '/api';

  const response = await fetch(`${baseUrl}/donation-boxes`, {
    method: 'POST',
    body: JSON.stringify(box),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log('response', response);
  return response.json();
};

export const getBoxDetail = async (id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/donation-boxes/${id}`, {
    method: 'GET',

    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log('response', response);
  return response.json();
};

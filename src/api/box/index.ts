'use server';

import { cookies } from 'next/headers';

import { type DonationBox } from '@/types/donationBox';

export const postNewBox = async (box: DonationBox) => {
  const accessToken = cookies().get('access_token');
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/donation-boxes`, {
    method: 'POST',
    body: JSON.stringify(box),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken?.value}`,
    },
  });

  console.log('response', response);
  return response.json();
};

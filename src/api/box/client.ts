'use client';

import ApiResponse from '@/types/api-response';
import { type DonationBox } from '@/types/donationBox';
import { Message } from '@/types/message';
import client from '../client';

export const postNewBox = async (box: DonationBox): Promise<ApiResponse.ResponsePostNewBox> => {
  const baseUrl = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_BASE_URL : '/api';

  const response = await client(`${baseUrl}/donation-boxes`, {
    method: 'POST',
    body: JSON.stringify(box),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

export const postNewMessage = async (requestData: Pick<Message, 'tag' | 'boxId'>) => {
  const baseUrl = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_BASE_URL : '/api';

  const response = await fetch(`${baseUrl}/messages`, {
    method: 'POST',
    body: JSON.stringify(requestData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

'use client';

import ApiResponse from '@/shared/types/api-response';
import { type DonationBox } from '@/shared/types/donationBox';
import { Message } from '@/shared/types/message';

export const postNewBox = async (box: DonationBox): Promise<ApiResponse.ResponsePostNewBox> => {
  const baseUrl = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_BASE_URL : '/api';

  const response = await fetch(`${baseUrl}/donation-boxes`, {
    method: 'POST',
    body: JSON.stringify(box),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
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

  return await response.json();
};

export const patchDonatedByBox = async (boxId: number, isDonated: boolean) => {
  const baseUrl = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_BASE_URL : '/api';
  const response = await fetch(`${baseUrl}/donation-boxes/${boxId}`, {
    method: 'PATCH',
    body: JSON.stringify({ isDonated }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
};

export const patchCertificationImageUrl = async (boxId: number, imageUrl: string) => {
  const baseUrl = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_BASE_URL : '/api';
  const response = await fetch(`${baseUrl}/certifications`, {
    method: 'PATCH',
    body: JSON.stringify({ boxId, imageUrl }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
};

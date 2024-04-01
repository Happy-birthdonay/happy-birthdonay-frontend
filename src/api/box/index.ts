import { type DonationBox } from '@/types/donationBox';

export const postNewBox = async (box: DonationBox) => {
  const baseUrl = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_BASE_URL : '/api';

  const response = await fetch(`${baseUrl}/donation-boxes`, {
    method: 'POST',
    body: JSON.stringify(box),
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxMTkzNTQ1NywianRpIjoiMDhhZmY2ZmEtZDJkOC00Y2VlLWIyMzItOTU5ZThkMDBkOTJjIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MTcsIm5iZiI6MTcxMTkzNTQ1NywiY3NyZiI6ImE0NWZkOGEzLTgyNzMtNDNkYS1iMWY3LTU1YzUxOTdmYjgzYiIsImV4cCI6MTcxMjAyMTg1NywidXNlcl9pZCI6MTcsIm5hbWUiOiJcdWJjMTVcdWJiZmNcdWM4ZmMiLCJiaXJ0aGRheSI6IjA2MTIiLCJrYWthb19pZCI6MzM5NjIxNDU3NywiYWNjZXNzX3Rva2VuIjoiIiwicmVmcmVzaF90b2tlbiI6IiIsInVwZGF0ZWRfYXQiOiJNb24sIDAxIEFwciAyMDI0IDAxOjM3OjM2IEdNVCJ9.fa`,
    },
  });

  console.log('response', response);
  return response.json();
};

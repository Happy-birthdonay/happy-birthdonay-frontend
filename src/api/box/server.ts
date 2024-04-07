import client from '../client';

export const getBoxDetail = async (boxId: number) => {
  //   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/donation-boxes/${boxId}`, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxMjM5MDI4OCwianRpIjoiZmNmYmQyYTYtMjUwNS00ZTdjLWJhMDktN2YwNTRiNzg1MzY1IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MjcsIm5iZiI6MTcxMjM5MDI4OCwiY3NyZiI6ImEyM2JiMjg4LTU2ZmMtNDNkMC05NmU4LTg3ODZiMWUwNDU1MSIsImV4cCI6MTcxMjQ3NjY4OCwidXNlcl9pZCI6MjcsIm5hbWUiOiJcdWJjMTVcdWJiZmNcdWM4ZmMiLCJiaXJ0aGRheSI6IjA2MTIiLCJrYWthb19pZCI6MzM5NjIxNDU3NywiYWNjZXNzX3Rva2VuIjoiIiwicmVmcmVzaF90b2tlbiI6IiIsInVwZGF0ZWRfYXQiOm51bGx9.75RU-rU0XXzrK4yGBOpkEMJA5l_LB4YnnDQGdz`,
  //     },
  //   });
  const baseUrl = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_BASE_URL : '/api';

  const response = await client(`${baseUrl}/donation-boxes/${boxId}`, {
    method: 'GET',
  });
  return response.json();
};

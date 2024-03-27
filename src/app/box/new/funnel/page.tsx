'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

import { postNewBox } from '@/api/box';
import BoxDescription from '@/components/Funnel/DonationBox/BoxDescription';
import BoxDetail from '@/components/Funnel/DonationBox/BoxDetail';
import DonationDetail from '@/components/Funnel/DonationBox/DonationDetail';
import { useUser } from '@/store/userStore';
import { DonationBox } from '@/types/donationBox';
import getCookie from '@/utils/getCookie';

// function getCookie(name: string) {
//   const matches = document.cookie.match(
//     new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
//   );
//   return matches ? decodeURIComponent(matches[1]) : undefined;
// }

// const clientPostNewBox = async (box: DonationBox) => {
//   const accessToken = getCookie('access_token');

//   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/donation-boxes`, {
//     method: 'POST',
//     body: JSON.stringify(box),
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });

//   console.log('response', response);
//   return response.json();
// };

export default function FunnerPage() {
  const pathname = usePathname();
  const router = useRouter();

  const methods = useForm();

  const user = useUser();

  const [step, setStep] = useState<'donation' | 'boxDetail' | 'boxDescription'>('donation');

  const onSubmit = async (data: FieldValues) => {
    console.log('onSubmit data', user, data);
    // const response = await postNewBox(data as DonationBox);
    try {
      const cookie = getCookie('access_token');

      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/donation-boxes`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookie}`,
        },
      });
      console.log('response', response);
      //TODO:response의 boxId로 변경
      if (response.ok) {
        router.push(`${pathname}/complete/1`);
      } else {
        window.alert(response);
      }
    } catch (e) {}
  };

  return (
    <FormProvider {...methods}>
      <main>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {step === 'donation' && (
            <DonationDetail
              register={methods.register}
              onNext={() => {
                setStep('boxDetail');
              }}
            />
          )}
          {step === 'boxDetail' && (
            <BoxDetail
              register={methods.register}
              onNext={(data) => {
                setStep('boxDescription');
              }}
            />
          )}
          {step === 'boxDescription' && (
            <BoxDescription
              register={methods.register}
              onNext={(data: FieldValues) => {
                methods.handleSubmit(onSubmit);
              }}
            />
          )}
        </form>
      </main>
    </FormProvider>
  );
}

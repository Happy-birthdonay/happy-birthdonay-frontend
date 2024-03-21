'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

import { postNewBox } from '@/api/box';
import BoxDescription from '@/components/Funnel/DonationBox/BoxDescription';
import BoxDetail from '@/components/Funnel/DonationBox/BoxDetail';
import DonationDetail from '@/components/Funnel/DonationBox/DonationDetail';
import { DonationBox } from '@/types/donationBox';

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

  const [step, setStep] = useState<'donation' | 'boxDetail' | 'boxDescription'>('donation');

  const onSubmit = async (data: FieldValues) => {
    console.log('data', data);
    const response = await postNewBox(data as DonationBox);
    console.log('reponse', response);
  };

  return (
    <FormProvider {...methods}>
      <main>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {step === 'donation' && (
            <DonationDetail
              register={methods.register}
              onNext={(data) => {
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
                router.push(`${pathname}/complete`);
              }}
            />
          )}
        </form>
      </main>
    </FormProvider>
  );
}

'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

import { postNewBox } from '@/api/box';
import BoxDescription from '@/components/Funnel/DonationBox/BoxDescription';
import BoxDetail from '@/components/Funnel/DonationBox/BoxDetail';
import DonationDetail from '@/components/Funnel/DonationBox/DonationDetail';
import { useUser } from '@/store/user/userStore';
import { DonationBox } from '@/types/donationBox';

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
      const response = await postNewBox(data as DonationBox);
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
              onNext={() => {
                setStep('boxDescription');
              }}
            />
          )}
          {step === 'boxDescription' && (
            <BoxDescription
              register={methods.register}
              onNext={() => {
                methods.handleSubmit(onSubmit);
              }}
            />
          )}
        </form>
      </main>
    </FormProvider>
  );
}

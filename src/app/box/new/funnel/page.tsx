'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

import { postNewBox } from '@/api/box/client';
import BoxDescription from '@/components/Funnel/DonationBox/BoxDescription';
import BoxDetail from '@/components/Funnel/DonationBox/BoxDetail';
import DonationDetail from '@/components/Funnel/DonationBox/DonationDetail';
import { DonationBox } from '@/types/donationBox';

export default function FunnerPage() {
  const pathname = usePathname();
  const router = useRouter();

  const methods = useForm();

  const [step, setStep] = useState<'donation' | 'boxDetail' | 'boxDescription'>('donation');

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await postNewBox(data as DonationBox);

      if (response.result === 'succeed') {
        router.push(`${pathname}/complete/${response.data.boxId}`);
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
                if (methods.formState.isValid) setStep('boxDescription');
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

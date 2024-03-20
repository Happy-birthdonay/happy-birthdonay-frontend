'use client';

import { useState } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

import { postNewBox } from '@/api/box';
import BoxDescription from '@/components/DonationBoxDetail/BoxDescription';
import BoxDetail from '@/components/DonationBoxDetail/BoxDetail';
import DonationDetail from '@/components/DonationBoxDetail/DonationDetail';
import { DonationBox } from '@/types/donationBox';

export default function FunnerPage() {
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
          <h1>Funnel Page</h1>
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
                onSubmit(data);
              }}
            />
          )}
        </form>
      </main>
    </FormProvider>
  );
}

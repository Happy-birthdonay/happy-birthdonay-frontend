'use client';

import { createStore, StateMachineProvider } from 'little-state-machine';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';

import BoxDescription from '@/components/Funnel/DonationBox/BoxDescription';
import BoxDetail from '@/components/Funnel/DonationBox/BoxDetail';
import DonationDetail from '@/components/Funnel/DonationBox/DonationDetail';
import { postNewBox } from '@/features/box/api/client';
import { DonationBox } from '@/shared/types/donationBox';

createStore({});

export default function FunnerPage() {
  const pathname = usePathname();
  const router = useRouter();

  const [step, setStep] = useState<'donation' | 'boxDetail' | 'boxDescription'>('donation');
  const createNewBox = async (data: FieldValues) => {
    try {
      console.log('Data', data);
      const response = await postNewBox(data as DonationBox);

      if (response.result === 'succeed') {
        router.push(`${pathname}/complete/${response.data.boxId}`);
      } else {
        window.alert(response);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <StateMachineProvider>
      <main>
        {step === 'donation' && (
          <DonationDetail
            onNext={() => {
              setStep('boxDetail');
            }}
          />
        )}
        {step === 'boxDetail' && (
          <BoxDetail
            onNext={() => {
              setStep('boxDescription');
            }}
          />
        )}
        {step === 'boxDescription' && <BoxDescription onSubmit={createNewBox} />}
      </main>
    </StateMachineProvider>
  );
}

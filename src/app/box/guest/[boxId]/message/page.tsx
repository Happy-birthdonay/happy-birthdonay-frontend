'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import GuestDetail from '@/components/Funnel/Message/GuestDetail';

function MessagePage() {
  const methods = useForm();

  const [step, setStep] = useState<'donation' | 'boxDetail' | 'boxDescription'>('donation');

  return (
    <h1>
      <GuestDetail register={methods.register} onNext={() => {}} />
    </h1>
  );
}
export default MessagePage;

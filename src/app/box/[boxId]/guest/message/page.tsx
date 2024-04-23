'use client';

import { createStore, StateMachineProvider } from 'little-state-machine';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';

import Complete from '@/components/Funnel/GuestMessage/Complete';
import GuestDetail from '@/components/Funnel/GuestMessage/GuestDetail';
import Message from '@/components/Funnel/GuestMessage/Message';
import { postNewMessage } from '@/features/box/api/client';

type MessagePageProps = {
  params: { boxId: string };
};

createStore({});

function MessagePage(props: MessagePageProps) {
  const { params } = props;
  const router = useRouter();

  const [step, setStep] = useState<'guestDetail' | 'message' | 'complete'>('complete');

  const createNewMessage = async (data: FieldValues) => {
    try {
      console.log('data', data);
      const boxId = Number(params.boxId);
      const requestData = { ...data, tag: data.tag.key, boxId };
      const response = await postNewMessage(requestData);
      if (response.result === 'success') {
        setStep('complete');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <StateMachineProvider>
      {step === 'guestDetail' && (
        <GuestDetail
          onNext={() => {
            setStep('message');
          }}
        />
      )}
      {step === 'message' && <Message onSubmit={createNewMessage} />}
      {step === 'complete' && <Complete onNext={() => router.push('/')} />}
    </StateMachineProvider>
  );
}
export default MessagePage;

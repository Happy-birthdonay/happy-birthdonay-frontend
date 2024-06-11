'use client';

import { createStore, StateMachineProvider } from 'little-state-machine';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';

import Complete from '@/components/Funnel/GuestMessage/Complete';
import GuestDetail from '@/components/Funnel/GuestMessage/GuestDetail';
import Message from '@/components/Funnel/GuestMessage/Message';
import { postNewMessage } from '@/features/box/api/client';
import { getCookie, setCookie } from './_utils/cookie';

type MessagePageProps = {
  params: { boxId: string };
};

createStore({});

function MessagePage(props: MessagePageProps) {
  const { params } = props;
  const router = useRouter();

  const [step, setStep] = useState<'guestDetail' | 'message' | 'complete'>('guestDetail');

  const createNewMessage = async (data: FieldValues) => {
    try {
      const boxId = Number(params.boxId);
      const requestData = { ...data, tag: data.tag.key, boxId };
      const response = await postNewMessage(requestData);
      if (response.result === 'success') {
        setStep('complete');
        setCookie('canComplete', 'true', { 'max-age': 3600 }); // Cookie expires in 1 hour
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleCreateMessage = (data: FieldValues) => {
    const canComplete = getCookie('canComplete');
    if (canComplete) {
      window.alert('이미 메시지를 작성 하였습니다.');
      return; // Do nothing if the cookie exists
    } else {
      console.log('canComplete cookie does not exist. Executing function.');
      createNewMessage(data);
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
      {step === 'message' && <Message onSubmit={handleCreateMessage} />}
      {step === 'complete' && <Complete onNext={() => router.push('/')} />}
    </StateMachineProvider>
  );
}
export default MessagePage;

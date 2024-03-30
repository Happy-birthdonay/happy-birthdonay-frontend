'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';

import Complete from '@/components/Funnel/GuestMessage/Complete';
import GuestDetail from '@/components/Funnel/GuestMessage/GuestDetail';
import Message from '@/components/Funnel/GuestMessage/Message';
import { useUser } from '@/store/user/userStore';

type MessagePageProps = {
  params: { boxId: string };
};

const Wrapper = styled.main`
  height: 100%;

  form {
    height: 100%;
  }
`;

function MessagePage(props: MessagePageProps) {
  const { params } = props;
  const router = useRouter();
  const methods = useForm();
  const user = useUser();

  const [step, setStep] = useState<'guestDetail' | 'message' | 'complete'>('guestDetail');

  const onSubmit = async (data: FieldValues) => {
    console.log('onSubmit data', data);
    const boxId = params.boxId;
    const requestData = { ...data, tag: data.tag.key, boxId };
    const response = fetch('/api/messages', {
      method: 'POST',
      body: JSON.stringify(requestData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.access_token}`,
      },
    });
    console.log('response', response);
  };

  return (
    <FormProvider {...methods}>
      <Wrapper>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {step === 'guestDetail' && (
            <GuestDetail
              register={methods.register}
              onNext={() => {
                setStep('message');
                console.log('click');
              }}
            />
          )}
          {step === 'message' && <Message register={methods.register} onNext={() => {}} />}
          {step === 'complete' && <Complete onNext={() => router.push('/')} />}
        </form>
      </Wrapper>
    </FormProvider>
  );
}
export default MessagePage;

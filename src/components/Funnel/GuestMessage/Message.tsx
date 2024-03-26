'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValue, FieldValues, useForm, useFormContext, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

import Button from '@/components/Button';
import Chips from '@/components/Chips';
import ColorButton from '@/components/ColorButton';
import Gift from '@/components/GiftBox';
import Input from '@/components/Input';
import TextField from '@/components/TextField';
import HappinessSrc from '@/public/icon/clover.svg';
import HealthSrc from '@/public/icon/health.svg';
import PeaceSrc from '@/public/icon/mdi_peace.svg';
import LoveSrc from '@/public/icon/user-love.svg';
import { getTypographyStyles } from '@/styles/fonts';
import { type BoxColor } from '@/types/donationBox';

const Wrapper = styled.div`
  height: 100%;

  form {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 15px;
  margin-bottom: 30px;
`;

const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Text = styled.p`
  ${getTypographyStyles('Caption_M')}
  strong {
    ${getTypographyStyles('Body1_B')}
  }
`;

type MessageProps = {
  register: UseFormRegister<FieldValues>;
  onNext: (data: FieldValues) => void;
};

function Message(props: MessageProps) {
  const { register, onNext } = props;
  const { setValue, watch } = useFormContext();
  const createdBy = watch('createdBy');
  const tag = watch('tag');

  return (
    <Wrapper>
      <div>
        <Container>
          <ColorContainer>
            <Text>
              <strong>{createdBy}</strong>님이 친구에게 보내는 축하 메시지
            </Text>
            <TextField placeholder="축하 메시지를 적어 주세요." {...register('contents')} />
            <ColorButton type="button" key={tag.key} $chipColor={tag.color}>
              {tag.children}
            </ColorButton>
          </ColorContainer>
        </Container>

        <Button onClick={onNext} $buttonType="primary">
          저장 후 보내기
        </Button>
      </div>
    </Wrapper>
  );
}

export default Message;

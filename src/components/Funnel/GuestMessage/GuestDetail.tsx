'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, useState } from 'react';
import { FieldValue, FieldValues, useForm, useFormContext, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

import Button from '@/components/Button';
import Chips from '@/components/Chips';
import ColorButton from '@/components/ColorButton';
import Gift from '@/components/GiftBox';
import Input from '@/components/Input';
import HappinessSrc from '@/public/icon/clover.svg';
import HealthSrc from '@/public/icon/health.svg';
import PeaceSrc from '@/public/icon/mdi_peace.svg';
import LoveSrc from '@/public/icon/user-love.svg';
import { getTypographyStyles } from '@/styles/fonts';
import { type BoxColor } from '@/types/donationBox';

const Wrapper = styled.div`
  height: 100%;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 15px;
  margin-bottom: 30px;
  h3 {
    ${getTypographyStyles('Headline3_B')}
  }
`;

const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const ChipContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 9px 6px;
  grid-template-columns: fit-content(60px) fit-content(40px);
  justify-content: flex-start;
  button {
    justify-self: flex-start;
  }
`;

const Text = styled.p`
  ${getTypographyStyles('Body2_M')}
`;

export const ColorChips = [
  {
    key: 'health',
    color: '#844AFF',
    children: (
      <>
        Health
        <Image alt="health" src={HealthSrc} />
      </>
    ),
  },
  {
    key: 'peace',
    color: '#6ACD4F',
    children: (
      <>
        Peace
        <Image alt="peace" src={PeaceSrc} />
      </>
    ),
  },
  {
    key: 'happiness',
    color: '#EFBEED',
    children: (
      <>
        Happiness
        <Image alt="happiness" src={HappinessSrc} />
      </>
    ),
  },
  {
    key: 'love',
    color: '#E8555F',
    children: (
      <>
        Love
        <Image alt="love" src={LoveSrc} />
      </>
    ),
  },
];

type GuestDetailProps = {
  register: UseFormRegister<FieldValues>;
  onNext: MouseEventHandler<HTMLButtonElement>;
};

function GuestDetail(props: GuestDetailProps) {
  const { register, onNext } = props;
  const { setValue } = useFormContext();

  return (
    <Wrapper>
      <div>
        <Container>
          <Input label="닉네임을 적어주세요." placeholder="독고다이 악어" {...register('createdBy')} />
          <ColorContainer>
            <Text>메시지에 담고 싶은 선물을 골라주세요</Text>
            <Chips
              chips={ColorChips}
              onSelect={(tag) => {
                setValue('tag', tag);
              }}
            />
          </ColorContainer>
        </Container>

        <Button onClick={onNext} $buttonType="primary">
          다음
        </Button>
      </div>
    </Wrapper>
  );
}

export default GuestDetail;

'use client';

import { useRouter } from 'next/navigation';
import { MouseEvent, MouseEventHandler } from 'react';
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.div`
  height: 100%;

  div {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
  h3 {
    ${getTypographyStyles('Headline3_B')}
  }
`;

type DonationDetailProps = {
  register: UseFormRegister<FieldValues>;
  onNext: MouseEventHandler<HTMLButtonElement>;
};

function DonationDetail(props: DonationDetailProps) {
  const { register, onNext } = props;

  return (
    <Wrapper>
      <Container>
        <Input label="어디에 기부할까요?" placeholder="기부처 이름" {...register('name')} />
        <Input label="링크를 넣어주세요" placeholder="기부처 링크" {...register('url')} />
        <Input
          label="기부할 금액을 알려주세요"
          placeholder="기부할 금액"
          type="number"
          {...register('amount', { valueAsNumber: true, validate: (value) => value > 0 })}
        />
      </Container>

      <Button onClick={onNext} $buttonType="primary">
        다음
      </Button>
    </Wrapper>
  );
}

export default DonationDetail;

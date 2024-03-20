'use client';

import { useRouter } from 'next/navigation';
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
  onNext: (data: FieldValues) => void;
};

function DonationDetail(props: DonationDetailProps) {
  const { register, onNext } = props;
  const router = useRouter();

  return (
    <Wrapper>
      <Container>
        <Input label="어디에 기부할까요?" placeholder="기부처 이름" {...register('name')} />
        <Input label="링크를 넣어주세요" placeholder="기부처 링크" {...register('url')} />
        <Input label="기부할 금액을 알려주세요" placeholder="기부할 금액" {...register('amount')} />
      </Container>

      <Button onClick={onNext} $buttonType="primary">
        다음
      </Button>
    </Wrapper>
  );
}

export default DonationDetail;

'use client';

import { useStateMachine } from 'little-state-machine';
import { FieldValues, useForm } from 'react-hook-form';
import styled from 'styled-components';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { getTypographyStyles } from '@/styles/fonts';
import updateAction from './updateAction';

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
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
  h3 {
    ${getTypographyStyles('Headline3_B')}
  }
`;

type DonationDetailProps = {
  onNext: () => void;
};

function DonationDetail(props: DonationDetailProps) {
  const { onNext } = props;
  const { register, handleSubmit, formState } = useForm({ mode: 'onChange' });
  const { isValid, errors } = formState;
  const { actions } = useStateMachine({ updateAction });

  const regexUrl = /^(http|https):\/\/[^ "]+$/;
  const onSubmit = (data: FieldValues) => {
    actions.updateAction(data);
    onNext();
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Input
            label="어디에 기부할까요?"
            placeholder="기부처 이름"
            bottomText={errors.name?.message as string}
            $isError={!!errors.name}
            {...register('name', { required: { value: true, message: '기부처를 입력해 주세요.' } })}
          />
          <Input
            label="링크를 넣어주세요"
            placeholder="https://example.com"
            bottomText={errors.url?.message as string}
            $isError={!!errors.url}
            {...register('url', {
              required: { value: true, message: '기부처 링크를 입력해 주세요.' },
              pattern: {
                value: regexUrl,
                message: '유효한 URL을 입력해주세요.',
              },
            })}
          />
          <Input
            label="기부할 금액을 알려주세요"
            placeholder="기부할 금액"
            type="number"
            unit="원"
            {...register('amount', {
              valueAsNumber: true,
              required: { value: true, message: '필수값 입니다.' },
              min: { value: 0, message: '0원 이상 입력해주세요.' },
              max: { value: 100000000, message: '1억 이하로 입력해주세요.' },
            })}
          />
        </Container>

        <Button disabled={!isValid} type="submit" $buttonType="primary">
          다음
        </Button>
      </form>
    </Wrapper>
  );
}

export default DonationDetail;

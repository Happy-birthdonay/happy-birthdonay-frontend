'use client';

import { useStateMachine } from 'little-state-machine';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import styled from 'styled-components';

import Button from '@/components/Button';
import Chips from '@/components/Chips';
import Input from '@/components/Input';
import { ColorChips } from '@/shared/consts/colorChips';
import { getTypographyStyles } from '@/styles/fonts';
import updateAction from './updateAction';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const Text = styled.p`
  ${getTypographyStyles('Body2_M')}
`;

const ErrorMessage = styled.p`
  ${getTypographyStyles('Body2_M')};
  color: ${({ theme }) => theme.colors.main.red};
`;

type GuestDetailProps = {
  onNext: () => void;
};

function GuestDetail(props: GuestDetailProps) {
  const { onNext } = props;

  const { register, handleSubmit, formState, control, setValue, setError, watch } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const onSubmit = (data: FieldValues) => {
    console.log('data', data);
    console.log('onSubmit', watch('tag'));
    if (!watch('tag')) {
      setError('tag', { type: 'required', message: '선물을 선택해주세요.' });
      return;
    }
    actions.updateAction(data);
    onNext();
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Controller
            name="createdBy"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                {...register('createdBy', {
                  required: {
                    value: true,
                    message: '닉네임을 적어주세요.',
                  },
                  maxLength: {
                    value: 10,
                    message: '10자 이내로 작성해주세요.',
                  },
                })}
                onChange={(e) => onChange(e.target.value)}
                bottomText={formState.errors.createdBy?.message as string}
                $isError={!!formState.errors.createdBy}
                maxLength={10}
                length={value?.length ?? 0}
                label="닉네임을 적어주세요."
                placeholder="독고다이 악어"
              />
            )}
          />

          <ColorContainer>
            <Text>메시지에 담고 싶은 선물을 골라주세요</Text>
            {formState.errors.tag?.message && <ErrorMessage>{formState.errors.tag?.message as string}</ErrorMessage>}
            <Chips
              chips={ColorChips}
              onSelect={(tag) => {
                setValue('tag', tag);
              }}
            />
          </ColorContainer>
        </Container>

        <Button type="submit" $buttonType="primary">
          다음
        </Button>
      </form>
    </Wrapper>
  );
}

export default GuestDetail;

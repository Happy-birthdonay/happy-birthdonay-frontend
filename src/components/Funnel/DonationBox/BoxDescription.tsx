'use client';

import { useStateMachine } from 'little-state-machine';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import styled from 'styled-components';

import Button from '@/components/Button';
import TextField from '@/components/TextField';
import { getTypographyStyles } from '@/styles/fonts';
import updateAction from './updateAction';

const Wrapper = styled.div`
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
  p {
    ${getTypographyStyles('Body2_M')}
  }
`;

type BoxDescriptionProps = {
  onSubmit: (data: FieldValues) => void;
};

function BoxDescription(props: BoxDescriptionProps) {
  const { onSubmit } = props;
  const { register, handleSubmit, formState, control } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onCreateBox = (data: FieldValues) => {
    actions.updateAction(data);
    onSubmit({ ...state, ...data });
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onCreateBox)}>
        <Container>
          <p>친구에게 보여줄 대표 메시지를 적어보세요</p>
          <Controller
            name="boxDescription"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                {...register('boxDescription', {
                  required: { value: true, message: '대표 메시지를 적어주세요.' },
                  maxLength: { value: 150, message: '150자 이내로 작성해주세요.' },
                })}
                onChange={(e) => onChange(e.target.value)}
                bottomText={formState.errors.boxDescription?.message as string}
                $isError={!!formState.errors.boxDescription}
                maxLength={150}
                length={value?.length ?? 0}
              />
            )}
          />
        </Container>
        <Button type="submit" $buttonType="primary">
          저장하기
        </Button>
      </form>
    </Wrapper>
  );
}

export default BoxDescription;

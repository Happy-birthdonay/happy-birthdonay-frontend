'use client';

import { useStateMachine } from 'little-state-machine';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import styled from 'styled-components';

import Button from '@/components/Button';
import ColorButton from '@/components/ColorButton';
import TextField from '@/components/TextField';
import { TAG_COLOR } from '@/shared/consts/const';
import { Chip } from '@/shared/types/ui';
import { getTypographyStyles } from '@/styles/fonts';
import updateAction from '../DonationBox/updateAction';

import type { Message, MessageTag } from '@/shared/types/message';

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
  gap: 15px;
  margin-bottom: 30px;
`;

const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  & > :last-child {
    margin-top: 12px;
  }
`;

const Text = styled.p`
  ${getTypographyStyles('Caption_M')}
  strong {
    ${getTypographyStyles('Body1_B')}
  }
`;

type MessageProps = {
  onSubmit: (data: FieldValues) => void;
};

function Message(props: MessageProps) {
  const { onSubmit } = props;
  const { register, handleSubmit, control, formState } = useForm();
  const { state, actions } = useStateMachine({ updateAction });
  const { tag, createdBy } = state as { tag: Chip; createdBy: string };

  const onCreateNewMessage = (data: FieldValues) => {
    actions.updateAction(data);
    onSubmit({ ...state, ...data });
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onCreateNewMessage)}>
        <Container>
          <ColorContainer>
            <Text>
              <strong>{createdBy}</strong>님이 친구에게 보내는 축하 메시지
            </Text>
            <Controller
              name="contents"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  {...register('contents', {
                    required: { value: true, message: '축하 메시지를 적어주세요.' },
                    maxLength: { value: 300, message: '300자 이내로 작성해주세요.' },
                  })}
                  $backgroundColor={TAG_COLOR[tag?.key as MessageTag].backgroundColor}
                  placeholder="축하 메시지를 적어 주세요."
                  onChange={(e) => onChange(e.target.value)}
                  bottomText={formState.errors.contents?.message as string}
                  $isError={!!formState.errors.contents}
                  $maxLength={300}
                  length={value?.length ?? 0}
                />
              )}
            />

            <ColorButton type="button" key={tag?.key} $chipColor={tag?.color}>
              {tag?.children}
            </ColorButton>
          </ColorContainer>
        </Container>

        <Button type="submit" $buttonType="primary">
          저장 후 보내기
        </Button>
      </form>
    </Wrapper>
  );
}

export default Message;

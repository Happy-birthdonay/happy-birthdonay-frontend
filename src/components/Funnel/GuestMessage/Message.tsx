'use client';

import { FieldValues, useFormContext, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

import Button from '@/components/Button';
import ColorButton from '@/components/ColorButton';
import TextField from '@/components/TextField';
import { getTypographyStyles } from '@/styles/fonts';

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
  const { watch } = useFormContext();
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

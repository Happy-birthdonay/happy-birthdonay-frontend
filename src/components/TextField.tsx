import { forwardRef } from 'react';
import styled from 'styled-components';

import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.div`
  textarea {
    width: 100%;
    height: 100%;
    min-height: 150px;
    padding: 15px 20px;
    background-color: ${({ theme }) => theme.colors.main.white};
    border: 1px solid red;
    border-radius: 10px;
    resize: none;
    //scroll bar delete
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomText = styled.p<{ $isError?: boolean }>`
  color: ${({ theme, $isError }) => ($isError ? theme.colors.main.red : theme.colors.main.grey)};
  ${getTypographyStyles('Caption2_M')};
`;

const LengthText = styled.p<{ $isError?: boolean }>`
  ${getTypographyStyles('Caption2_M')};
  color: ${({ theme, $isError }) => ($isError ? theme.colors.main.red : theme.colors.main.grey)};
`;

type TextFieldProps = {
  $isError?: boolean;
  bottomText?: string;
  length?: number;
  maxLength?: number;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;
function TextField(props: TextFieldProps, ref: React.Ref<HTMLTextAreaElement>) {
  const { $isError, bottomText, length, maxLength, ...rest } = props;

  return (
    <Wrapper>
      <textarea ref={ref} type="text" {...rest} />
      <TextContainer>
        <BottomText $isError={$isError}>{bottomText ? bottomText : null}</BottomText>
        <LengthText $isError={$isError}>{maxLength ? `${length}/${props.maxLength}` : null}</LengthText>
      </TextContainer>
    </Wrapper>
  );
}

export default forwardRef(TextField);

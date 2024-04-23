import { forwardRef } from 'react';
import styled from 'styled-components';

import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.div<{ $backgroundColor?: string; $maxLength?: number; $color?: string }>`
  textarea {
    width: 100%;
    height: 100%;
    min-height: ${({ $maxLength }) => ($maxLength ? `${$maxLength}px` : '100px')};
    padding: 15px 20px;
    background-color: ${({ theme, $backgroundColor }) => $backgroundColor ?? theme.colors.main.white};
    border: ${({ $backgroundColor }) => ($backgroundColor ? 'none' : `1px solid red`)};
    color: ${({ theme, $color }) => $color ?? theme.colors.main.black};
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
  $backgroundColor?: string;
  $isError?: boolean;
  bottomText?: string;
  length?: number;
  $maxLength?: number;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;

function TextField(props: TextFieldProps, ref: React.Ref<HTMLTextAreaElement>) {
  const { $backgroundColor, $isError, bottomText, length, $maxLength, ...rest } = props;

  return (
    <Wrapper $backgroundColor={$backgroundColor} $maxLength={$maxLength}>
      <textarea ref={ref} type="text" {...rest} />
      <TextContainer>
        <BottomText $isError={$isError}>{bottomText ? bottomText : null}</BottomText>
        <LengthText $isError={$isError}>{$maxLength ? `${length}/${props.$maxLength}` : null}</LengthText>
      </TextContainer>
    </Wrapper>
  );
}

export default forwardRef(TextField);

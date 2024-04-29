'use client';

import React, { forwardRef, MouseEventHandler, Ref, useId } from 'react';
import styled from 'styled-components';

import { getTypographyStyles } from '@/styles/fonts';
import { LoadingSpinner } from './LoadingSpinner';

const Wrapper = styled.button<{ $buttonType: ButtonProps['$buttonType'] }>`
  width: 100%;
  height: 56px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 20px 20px;
  border-radius: 15px;
  text-align: center;
  background-color: ${({ $buttonType, theme }) =>
    $buttonType === 'primary' ? theme.colors.main.red : theme.colors.main.white};
  color: ${({ $buttonType, theme }) => ($buttonType === 'primary' ? theme.colors.main.white : theme.colors.main.black)};
  border: ${({ $buttonType, theme }) => ($buttonType === 'primary' ? 'none' : `1px solid ${theme.colors.main.red}`)};

  ${getTypographyStyles('Body2_B')}

  &:disabled {
    background-color: ${({ theme }) => theme.colors.main.grey};
    color: ${({ theme }) => theme.colors.main.white};
    cursor: not-allowed;
  }
`;

const Container = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

type ButtonProps = {
  children: React.ReactNode;
  isLoading?: boolean;
  $buttonType?: 'primary' | 'secondary';
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps, forwardedRef: Ref<HTMLButtonElement>) {
  const { isLoading = false, $buttonType = 'primary', onClick, children, disabled, ...rest } = props;
  const buttonId = useId();

  return (
    <Wrapper
      ref={forwardedRef}
      id={buttonId}
      as="button"
      onClick={onClick}
      $buttonType={$buttonType}
      disabled={isLoading || disabled}
      {...rest}
    >
      <Container>{isLoading ? <LoadingSpinner /> : children}</Container>
    </Wrapper>
  );
}

export default forwardRef(Button);

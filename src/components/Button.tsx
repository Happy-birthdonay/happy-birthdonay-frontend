'use client';

import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.button<{ $buttonType: ButtonProps['$buttonType'] }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
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
  }
`;

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  $buttonType?: 'primary' | 'secondary';
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps) {
  const { $buttonType = 'primary', onClick, children, ...rest } = props;
  return (
    <Wrapper as="button" onClick={onClick} $buttonType={$buttonType} {...rest}>
      {children}
    </Wrapper>
  );
}

export default Button;

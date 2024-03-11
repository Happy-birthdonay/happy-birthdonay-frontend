import { MouseEventHandler, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Wrapper = styled.button<{
  $color: LoginButtonProps['$color'];
  $backgroundColor: LoginButtonProps['$backgroundColor'];
  $border: LoginButtonProps['$border'];
}>`
  width: 100%;
  padding: 15px 20px;
  border-radius: 15px;
  text-align: center;
  color: ${({ $color }) => $color};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border: ${({ $border }) => `1px solid ${$border}`};
  font-weight: bold;
`;

type LoginButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  $color?: string;
  $backgroundColor: string;
  $border?: string;
} & PropsWithChildren;

function LoginButton(props: LoginButtonProps) {
  const { $backgroundColor, $color = '#000000', $border, onClick, children } = props;
  return (
    <Wrapper $backgroundColor={$backgroundColor} $color={$color} $border={$border} onClick={onClick}>
      {children}
    </Wrapper>
  );
}

export default LoginButton;

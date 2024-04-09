'use client';

import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import Description from './Description';
import GiftImage from './GiftImage';
import Title from './Title';

const Wrapper = styled.div<{ $width: string; $maxWidth: string }>`
  padding: 0;
  width: ${({ $width }) => $width};
  max-width: ${({ $maxWidth }) => $maxWidth};
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 36px;
  background-color: ${({ theme }) => theme.colors.main.white};
  align-self: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

type GiftProps = { onClick?: (e: React.MouseEvent) => void; $width?: string; $maxWidth?: string } & PropsWithChildren;

function Gift(props: GiftProps) {
  const { onClick, $width = '400px', $maxWidth = '100%', children } = props;
  return (
    <Wrapper onClick={onClick} $width={$width} $maxWidth={$maxWidth}>
      {children}
    </Wrapper>
  );
}

Gift.Title = Title;
Gift.Description = Description;
Gift.Box = GiftImage;
export default Gift;

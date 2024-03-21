import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import Description from './Description';
import GiftImage from './GiftImage';
import Title from './Title';

const Wrapper = styled.div`
  padding: 0 33px 33px;
  width: 85%;
  max-width: 400px;
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

type GiftProps = PropsWithChildren;

function Gift(props: GiftProps) {
  const { children } = props;
  return <Wrapper>{children}</Wrapper>;
}

Gift.Title = Title;
Gift.Description = Description;
Gift.Box = GiftImage;
export default Gift;

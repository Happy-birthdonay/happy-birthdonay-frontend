import Image from 'next/image';
import styled from 'styled-components';

import Input from '@/components/Input';
import BlueBox from '@/public/box/gift box=blue.png';
import GreenBox from '@/public/box/gift box=green.png';
import OrangeBox from '@/public/box/gift box=orange.png';
import PinkBox from '@/public/box/gift box=pink.png';
import VioletBox from '@/public/box/gift box=violet.png';
import WhiteBox from '@/public/box/gift box=white.png';
import YellowBox from '@/public/box/gift box=yellow.png';

const Wrapper = styled.div`
  width: 275px;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.main.white};
  align-self: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

const renderGift = (color: string) => {
  switch (color) {
    case 'blue':
      return BlueBox;
    case 'orange':
      return OrangeBox;
    case 'green':
      return GreenBox;
    case 'yellow':
      return YellowBox;
    case 'pink':
      return PinkBox;
    case 'violet':
      return VioletBox;
    default:
      return WhiteBox;
  }
};

type GiftProps = {
  color: string;
};

function Gift(props: GiftProps) {
  const { color } = props;
  return (
    <Wrapper>
      <Image alt="gift" src={renderGift(color)} />
    </Wrapper>
  );
}

export default Gift;

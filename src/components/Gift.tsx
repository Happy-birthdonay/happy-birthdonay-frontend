import Image from 'next/image';
import styled from 'styled-components';

import BlueBox from '@/public/box/gift box=blue.png';
import GreenBox from '@/public/box/gift box=green.png';
import OrangeBox from '@/public/box/gift box=orange.png';
import PinkBox from '@/public/box/gift box=pink.png';
import VioletBox from '@/public/box/gift box=violet.png';
import WhiteBox from '@/public/box/gift box=white.png';
import YellowBox from '@/public/box/gift box=yellow.png';
import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.div`
  padding: 0 33px 33px;
  width: 85%;
  max-width: 400px;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.main.white};
  align-self: center;

  img {
    width: 100%;
    height: 100%;
  }

  strong {
    ${getTypographyStyles('Body1_B')};
    margin-bottom: 18px;
  }
  p {
    ${getTypographyStyles('Caption2_M')};
    line-height: 20px;
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
      <strong>[ 그린 피스는 멋있어요 ]</strong>
      <p>
        생일에 카카오톡 선물하기 대신 여러분의 마음을 받아 기부하고 싶어요. 기부는 정말 뜻깊은 일이라구요!! 생일에
        카카오톡 선물하기 대신 여러분의 마음을 받아 기부하고 싶어요. 기부는
      </p>
    </Wrapper>
  );
}

export default Gift;

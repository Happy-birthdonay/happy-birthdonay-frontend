'use client';

import Image from 'next/image';

import BlueBox from '@/public/box/gift box=blue.png';
import GreenBox from '@/public/box/gift box=green.png';
import OrangeBox from '@/public/box/gift box=orange.png';
import PinkBox from '@/public/box/gift box=pink.png';
import VioletBox from '@/public/box/gift box=violet.png';
import WhiteBox from '@/public/box/gift box=white.png';
import YellowBox from '@/public/box/gift box=yellow.png';

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
function GiftImage(props: GiftProps) {
  const { color } = props;
  return <Image alt="gift" src={renderGift(color)} />;
}

export default GiftImage;

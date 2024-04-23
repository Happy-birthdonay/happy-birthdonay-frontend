import Image from 'next/image';

import HappinessSrc from '@/public/icon/clover.svg';
import HealthSrc from '@/public/icon/health.svg';
import PeaceSrc from '@/public/icon/mdi_peace.svg';
import LoveSrc from '@/public/icon/user-love.svg';

export const ColorChips = [
  {
    key: 'health',
    color: '#844AFF',
    children: (
      <>
        Health
        <Image alt="health" src={HealthSrc} />
      </>
    ),
  },
  {
    key: 'peace',
    color: '#6ACD4F',
    children: (
      <>
        Peace
        <Image alt="peace" src={PeaceSrc} />
      </>
    ),
  },
  {
    key: 'happiness',
    color: '#EFBEED',
    children: (
      <>
        Happiness
        <Image alt="happiness" src={HappinessSrc} />
      </>
    ),
  },
  {
    key: 'love',
    color: '#E8555F',
    children: (
      <>
        Love
        <Image alt="love" src={LoveSrc} />
      </>
    ),
  },
];

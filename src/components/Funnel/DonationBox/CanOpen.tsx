'use client';

import { usePathname, useRouter } from 'next/navigation';
import styled from 'styled-components';

import Button from '@/components/Button';
import Gift from '@/components/GiftBox';
import { getTypographyStyles } from '@/styles/fonts';
import { DonationBox } from '@/types/donationBox';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  h3 {
    ${getTypographyStyles('Headline3_B')}
  }

  p {
    ${getTypographyStyles('Body2_M')}
  }
`;

type CanOpenProps = {
  box: DonationBox;
};

function CanOpen(props: CanOpenProps) {
  const { box } = props;
  const pathName = usePathname();
  const router = useRouter();

  return (
    <Wrapper>
      <h3>
        선물 상자가 <br />
        도착했어요!
      </h3>
      <Gift>
        <Gift.Box color={box.color} />
        <Gift.Title text={box.boxTitle} />
      </Gift>
      <p>
        상자를 개봉해
        <br />
        메시지를 확인하고 기부해보세요!
      </p>
      <Button
        onClick={() => {
          router.push(`${pathName}/open`);
        }}
      >
        상자 열어보기
      </Button>
    </Wrapper>
  );
}

export default CanOpen;

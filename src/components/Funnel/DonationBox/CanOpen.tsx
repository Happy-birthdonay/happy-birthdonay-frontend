'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';

import Button from '@/components/Button';
import FixedBottomCTA from '@/components/FixedBottomCTA';
import Gift from '@/components/GiftBox';
import { DonationBox } from '@/shared/types/donationBox';
import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  & > div {
    h3 {
      @media screen and (max-height: 850px) {
        margin-bottom: 14px;
      }

      margin-bottom: 33px;
    }
  }

  h3 {
    h3 {
      @media screen and (max-height: 850px) {
        margin-bottom: 30px;
      }
    }
    margin-bottom: 60px;
    ${getTypographyStyles('Headline3_B')}
  }

  p {
    margin-bottom: 100px;
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

  const [isLoading, setIsLoading] = useState(false);

  return (
    <Wrapper>
      <Container>
        <h3>
          선물 상자가 <br />
          도착했어요!
        </h3>
        <Gift $width="75%">
          <Gift.Box color={box.color} />
          <Gift.Title text={box.boxTitle} />
        </Gift>
        <p>
          상자를 개봉해
          <br />
          메시지를 확인하고 기부해보세요!
        </p>
      </Container>
      <FixedBottomCTA>
        <Button
          isLoading={isLoading}
          onClick={() => {
            setIsLoading(true);
            router.push(`${pathName}/open`);
            setIsLoading(false);
          }}
        >
          상자 열어보기
        </Button>
      </FixedBottomCTA>
    </Wrapper>
  );
}

export default CanOpen;

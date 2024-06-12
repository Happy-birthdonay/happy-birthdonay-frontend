'use client';

import dayjs from 'dayjs';
import { usePathname, useRouter } from 'next/navigation';
import { useMemo } from 'react';
import styled from 'styled-components';

import Button from '@/components/Button';
import FixedBottomCTA from '@/components/FixedBottomCTA';
import Gift from '@/components/GiftBox';
import SharedButton from '@/components/SharedButton';
import { DonationBox } from '@/shared/types/donationBox';
import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  & > div {
    //media query
    @media screen and (max-height: 850px) {
      margin-bottom: 14px;
    }

    margin-bottom: 33px;
  }

  h3 {
    @media screen and (max-height: 850px) {
      margin-bottom: 30px;
    }

    margin-bottom: 60px;
    ${getTypographyStyles('Headline3_B')}
  }

  p {
    ${getTypographyStyles('Body2_M')}
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

type BeforeOpenedProps = {
  box: DonationBox;
};

function BeforeOpened(props: BeforeOpenedProps) {
  const { box } = props;
  const pathName = usePathname();
  const router = useRouter();

  const canOpen = useMemo(() => {
    const today = dayjs();
    const openDate = dayjs(box.openDate);
    return today.isBefore(openDate);
  }, [box.openDate]);

  const restTime = useMemo(() => {
    const today = dayjs();
    const openDate = dayjs(box.openDate);
    //일 시간 분 초 단위로 계산
    const restDay = openDate.diff(today, 'd');
    const restHour = openDate.subtract(restDay, 'd').diff(today, 'h');
    return `${restDay}일 ${restHour}시간`;
  }, [box.openDate]);

  const host = window.location.host;
  const url = `https://${host}/guest/${box.boxId}`;

  return (
    <Wrapper>
      <Container>
        <h3>
          선물 상자가 <br />
          만들어지는 중이에요!
        </h3>
        <Gift $width="75%">
          <Gift.Box color={box.color} />
          <Gift.Title text={box.boxTitle} />
        </Gift>
        <p>
          상자가 열리기 까지
          <br />
          {restTime} 남았어요!
        </p>
      </Container>
      <FixedBottomCTA>
        <ButtonContainer>
          <Button
            disabled={canOpen}
            onClick={() => {
              router.push(`${pathName}/open`);
            }}
          >
            상자 열어보기
          </Button>
          <SharedButton url={url} />
        </ButtonContainer>
      </FixedBottomCTA>
    </Wrapper>
  );
}

export default BeforeOpened;

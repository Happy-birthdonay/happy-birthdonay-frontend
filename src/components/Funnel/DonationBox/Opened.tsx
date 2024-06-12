'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import birthdayCakeOutline from 'public/birthdayCakeOutline.png';
import { useState } from 'react';
import styled from 'styled-components';

import Button from '@/components/Button';
import FixedBottomCTA from '@/components/FixedBottomCTA';
import { patchDonatedByBox } from '@/features/box/api/client';
import { DonationBox } from '@/shared/types/donationBox';
import { Message } from '@/shared/types/message';
import { clearCache } from '@/shared/utils/clearCache';
import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 36px;

  h3 {
    ${getTypographyStyles('Headline3_B')}
    margin-bottom:24px;
  }

  p {
    ${getTypographyStyles('Body2_M')}
  }
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > :first-child {
    @media screen and (max-height: 850px) {
      margin-bottom: 36px;
    }
    margin-bottom: 56px;
  }

  & > :nth-child(3) {
    @media screen and (max-height: 850px) {
      margin-bottom: 62px;
    }

    margin-bottom: 82px;
  }
  & > :last-child {
    margin-bottom: 30px;
  }
`;

type OpenedProps = {
  box: DonationBox;
  messageList: Message[];
};

function Opened(props: OpenedProps) {
  const { box, messageList } = props;
  const pathName = usePathname();

  const [isLoading, setIsLoading] = useState(false);

  const people = messageList.length;
  const total = box.amount * people;
  const donationName = box.name;
  const url = box.url;

  const onDonateWithRouter = async () => {
    try {
      setIsLoading(true);
      await patchDonatedByBox(box.boxId, true);
      clearCache(pathName);
      window.open(url, '_blank');
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Wrapper>
      <Container>
        <h3>
          Happy <br />
          Birthday!
        </h3>
        <Image width={230} height={230} src={birthdayCakeOutline} alt="mail" />
        <p>
          총 {people}명의 축하를 받았어요
          <br />
          모인 마음은 총 {total.toLocaleString()}원 입니다.
        </p>
        <p>
          <strong>{donationName}</strong>에 기부하고,
          <br /> 생일 축하 메시지를 확인해 보세요!
        </p>
      </Container>

      <FixedBottomCTA>
        <Button isLoading={isLoading} onClick={onDonateWithRouter}>
          기부하러 가기
        </Button>
      </FixedBottomCTA>
    </Wrapper>
  );
}
export default Opened;

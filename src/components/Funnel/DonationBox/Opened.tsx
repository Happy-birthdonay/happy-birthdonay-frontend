'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import birthdayCakeOutline from 'public/birthdayCakeOutline.png';
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
  justify-content: space-evenly;
  gap: 36px;
  align-items: center;
  text-align: center;

  h3 {
    ${getTypographyStyles('Headline3_B')}
    margin-bottom:24px;
  }

  p {
    ${getTypographyStyles('Body2_M')}
  }
`;
const Container = styled.div``;

type OpenedProps = {
  box: DonationBox;
  messageList: Message[];
};

function Opened(props: OpenedProps) {
  const { box, messageList } = props;
  const pathName = usePathname();

  const people = messageList.length;
  const total = box.amount * people;
  const donationName = box.name;
  const url = box.url;

  const onDonateWithRouter = async () => {
    try {
      const response = await patchDonatedByBox(box.boxId, true);
      clearCache(pathName);
      window.open(url, '_blank');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Wrapper>
      <h3>
        Happy <br />
        Birthday!
      </h3>
      <Container>
        <Image width={230} height={230} src={birthdayCakeOutline} alt="mail" />
        <p>
          총 {people}명의 축하를 받았어요
          <br />
          모인 마음은 총 {total.toLocaleString()}원 입니다.
        </p>
      </Container>
      <p>
        <strong>{donationName}</strong>에 기부하고,
        <br /> 생일 축하 메시지를 확인해 보세요!
      </p>
      <FixedBottomCTA>
        <Button onClick={onDonateWithRouter}>기부하러 가기</Button>
      </FixedBottomCTA>
    </Wrapper>
  );
}
export default Opened;

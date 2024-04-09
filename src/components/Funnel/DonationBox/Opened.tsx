'use client';

import Image from 'next/image';
import birthdayCakeOutline from 'public/birthdayCakeOutline.png';
import styled from 'styled-components';

import { patchDonatedByBox } from '@/api/box/client';
import Button from '@/components/Button';
import { getTypographyStyles } from '@/styles/fonts';
import { DonationBox } from '@/types/donationBox';
import { Message } from '@/types/message';

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

  const people = messageList.length;
  const total = box.amount * people;
  const donationName = box.name;
  const url = box.url;

  const onDonateWithRouter = async () => {
    try {
      const response = await patchDonatedByBox(box.boxId, true);
      console.log(response);
      location.href = url;
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
      <Button onClick={onDonateWithRouter}>기부하러 가기</Button>
    </Wrapper>
  );
}
export default Opened;

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import birthdayCakeOutline from 'public/birthdayCakeOutline.png';
import { MouseEventHandler } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form/dist/types';
import styled from 'styled-components';

import Button from '@/components/Button';
import { getTypographyStyles } from '@/styles/fonts';

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
const Container = styled.div``;

type OpenedProps = {
  register?: UseFormRegister<FieldValues>;
  onNext: MouseEventHandler<HTMLButtonElement>;
};

function Opened(props: OpenedProps) {
  const { onNext } = props;
  const router = useRouter();

  const people = 10;
  const total = 100000;
  const donationName = '그린피스';
  const url = `https://www.greenpeace.org/korea/`;

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
        {donationName}에 기부하고,
        <br /> 생일 축하 메시지를 확인해 보세요!
      </p>
      <Button onClick={() => router.push(url)}>기부하러 가기</Button>
    </Wrapper>
  );
}
export default Opened;

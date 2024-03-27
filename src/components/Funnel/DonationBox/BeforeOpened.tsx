import { useRouter } from 'next/navigation';
import { MouseEventHandler, useMemo } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form/dist/types';
import styled from 'styled-components';

import Button from '@/components/Button';
import Gift from '@/components/GiftBox';
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

const box = {
  color: 'pink',
  title: '그린피스 멋있어요',
  openAt: '2024-05-05',
};

type BeforeOpenedProps = {
  onNext: MouseEventHandler<HTMLButtonElement>;
};

function BeforeOpened(props: BeforeOpenedProps) {
  const { onNext } = props;
  const router = useRouter();

  //TODO: 상자 API 연동
  const restTime = useMemo(() => {
    const now = new Date();
    const openAt = new Date(box.openAt);
    //일 시간 분 초 단위로 계산
    const diff = openAt.getTime() - now.getTime();
    const restDay = Math.floor(diff / (1000 * 60 * 60 * 24));
    const restHour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return `${restDay}일 ${restHour}시간`;
  }, []);

  return (
    <Wrapper>
      <h3>
        선물 상자가 <br />
        만들어지는 중이에요!
      </h3>
      <Gift>
        <Gift.Box color={box.color} />
        <Gift.Title text={box.title} />
      </Gift>
      <p>
        상자가 열리기 까지
        <br />
        {restTime} 남았어요!
      </p>
      <Button disabled={true}>상자 열어보기</Button>
    </Wrapper>
  );
}

export default BeforeOpened;

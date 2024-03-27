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

type CanOpenProps = {
  onNext: MouseEventHandler<HTMLButtonElement>;
};

function CanOpen(props: CanOpenProps) {
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
        도착했어요!
      </h3>
      <Gift>
        <Gift.Box color={box.color} />
        <Gift.Title text={box.title} />
      </Gift>
      <p>
        상자를 개봉해
        <br />
        메시지를 확인하고 기부해보세요!
      </p>
      <Button>상자 열어보기</Button>
    </Wrapper>
  );
}

export default CanOpen;

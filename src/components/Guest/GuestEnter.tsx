'use client';

import { usePathname, useRouter } from 'next/navigation';
import styled from 'styled-components';

import Button from '@/components/Button';
import Gift from '@/components/GiftBox';
import { DonationBox } from '@/shared/types/donationBox';
import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  gap: 15px;
  h3 {
    ${getTypographyStyles('Headline3_B')}
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 23px;
  align-items: center;

  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const TextContainer = styled.div`
  text-align: center;
  p {
    ${getTypographyStyles('Body2_M')}
  }
`;

type GuestEnterProps = {
  box: DonationBox;
};

function GuestEnter(props: GuestEnterProps) {
  const { box } = props;
  const router = useRouter();
  const pathname = usePathname();

  const routerToMessage = () => {
    router.push(`${pathname}/message`);
  };

  return (
    <Wrapper>
      <Container>
        <h3>함께 기부해요 !</h3>
        <Gift $width="100%">
          <Gift.Box color={box.color} />
          <Gift.Title text={box.boxTitle} />
          <Gift.Description text={box.boxDescription} />
        </Gift>
        <TextContainer>
          <p>
            메시지를 작성하면 당신의 마음을 <br /> {`<${box.name}>`}에 {box.createdBy}님이 {box.amount}원 전달할
            예정이에요
          </p>
        </TextContainer>
      </Container>
      <Button onClick={routerToMessage} $buttonType="primary">
        생일 메시지 쓰러 가기
      </Button>
    </Wrapper>
  );
}

export default GuestEnter;

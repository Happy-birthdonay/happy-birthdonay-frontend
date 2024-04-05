'use client';

import { usePathname, useRouter } from 'next/navigation';
import styled from 'styled-components';

import Button from '@/components/Button';
import Gift from '@/components/GiftBox';
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

type GuestPageProps = {
  params: { boxId: string };
};

function GuestPage(props: GuestPageProps) {
  const { params } = props;
  const router = useRouter();
  const pathname = usePathname();

  const routerToMessage = () => {
    router.push(`${pathname}/message`);
  };

  // url 에 해당하는 기부 상자 id 로 API 요청해서 상자 데이터를 가져와야함.
  return (
    <Wrapper>
      <Container>
        <h3>함께 기부해요 !</h3>
        <Gift>
          <Gift.Box color={'blue'} />
          <Gift.Title text="그린 피스" />
          <Gift.Description text="생일에 카카오톡 선물하기 대신 여러분의 마음을 받아 기부하고 싶어요. 기부는 정말 뜻깊은 일이라구요!! 생일에 카카오톡 선물하기 대신 여러분의 마음을 받아 기부하고 싶어요. 기부는" />
        </Gift>
        <TextContainer>
          <p>
            메시지를 작성하면 <br /> 당신의 마음을 [그린 피스에] 전달할 수 있어요!
          </p>
        </TextContainer>
      </Container>
      <Button onClick={routerToMessage} $buttonType="primary">
        생일 메시지 쓰러 가기
      </Button>
    </Wrapper>
  );
}

export default GuestPage;

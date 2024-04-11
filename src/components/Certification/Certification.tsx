import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import styled from 'styled-components';

import { useDonationBox } from '@/api/box/hooks/useDonationBox';
import logoSrc from '@/public/logo.png';
import ribbonSrc from '@/public/ribbonOutline.png';
import { useUser } from '@/store/user/userStore';
import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.div<{ $isFlipped: boolean }>`
  position: relative;
  width: 329px;
  height: 616px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border: 1px solid #334075;
  transition: 0.8s;
  transform-style: preserve-3d;
  p {
    ${getTypographyStyles('Caption_M')};
    font-size: 14px;
    padding: 0 20px;
  }
`;

const FrontCard = styled(Card)<{ $isFlipped: boolean }>`
  z-index: 1;
  transform: ${({ $isFlipped }) => ($isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)')};
`;

const BackCard = styled(Card)<{ $isFlipped: boolean }>`
  transform: ${({ $isFlipped }) => ($isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  gap: 2px;
  strong {
    font-size: 23px;
    font-weight: bold;
  }
`;
const CertificationContainer = styled.div`
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const mock = ['박민주', '봉민주', '만쥬', '큐티은빈', '맹주', '선경이는양말두개', '오구리', '트리케라톱스'];
function Certification() {
  const { boxId } = useParams();

  const { box } = useDonationBox(boxId as string);
  const user = useUser();

  //certification의 앞면과 뒷면을 보여주는 state
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const { name, certCreatedAt, certImgUrl } = box;
  return (
    <Suspense fallback={null}>
      <Wrapper
        $isFlipped={isFlipped}
        className={`flipCard ${isFlipped ? 'flipped' : ''}`}
        onClick={() => {
          console.log('click');
          setIsFlipped((prev) => !prev);
        }}
      >
        <FrontCard $isFlipped={isFlipped}>
          <Image alt="logo" width={100} src={logoSrc} />
          <Title>
            <Image alt="ribbon" src={ribbonSrc} width={25} height={25} />
            <strong> 기부 증서</strong>
          </Title>
          <CertificationContainer>
            <img width={167} height={259} alt="certification img" src={certImgUrl} />
          </CertificationContainer>
          <Container>
            <p style={{ textDecoration: 'underline' }}>{`Donor's name`}</p>
            <p>{mock.join(', ')}</p>
          </Container>
          <strong>{user.name}</strong>
          <strong>{certCreatedAt}</strong>
        </FrontCard>

        <BackCard $isFlipped={isFlipped}>
          <Image alt="logo" width={100} src={logoSrc} />
          <Title>
            <Image alt="ribbon" src={ribbonSrc} width={25} height={25} />
            <strong> 기부 증서</strong>
          </Title>
          <CertificationContainer>
            <img width={167} height={259} alt="certification img" src={certImgUrl} />
          </CertificationContainer>
          <Container>
            <p>소중한 나눔에 동참해 주셔서 고맙습니다.</p>
            <p>
              남은 마음은 {name} 위해 사용 됩니다.
              <br /> 앞으로 받은 만큼 베푸는 {user.name}이 되겠습니다.
            </p>
          </Container>
          <strong>{user.name}</strong>
          <strong>{certCreatedAt}</strong>
        </BackCard>
      </Wrapper>
    </Suspense>
  );
}
export default Certification;

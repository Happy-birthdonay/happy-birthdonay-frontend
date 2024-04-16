import saveAs from 'file-saver';
import { toPng } from 'html-to-image';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { RefObject, Suspense, useRef, useState } from 'react';
import styled from 'styled-components';

import { useCertification } from '@/api/box/hooks/useCertifications';
import logoSrc from '@/public/logo.png';
import ribbonSrc from '@/public/ribbonOutline.png';
import { getTypographyStyles } from '@/styles/fonts';
import Button from '../Button';

const Wrapper = styled.div<{ $isFlipped: boolean }>`
  position: relative;
  width: 329px;
  height: 616px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  transform: ${({ $isFlipped }) => ($isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;

const BackCard = styled(Card)<{ $isFlipped: boolean }>`
  transform: ${({ $isFlipped }) => ($isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)')};
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  gap: 2px;
  padding: 0 10px;
`;

const TitleStrong = styled.strong`
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap;
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

const LogoContainer = styled.div`
  width: 100px;
  height: 100px;
`;

const LogoImage = styled(Image)``;

function Certification() {
  const { boxId } = useParams();

  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  const { certification } = useCertification(boxId as string);

  //certification의 앞면과 뒷면을 보여주는 state
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleDownload = async (ref: RefObject<HTMLDivElement>) => {
    if (!ref.current) return;

    try {
      const div = ref.current;

      const png = await toPng(div, { cacheBust: false, includeQueryParams: true });
      saveAs(png);
    } catch (error) {
      console.error('Error converting div to image:', error);
    }
  };

  if (!certification) return null;
  return (
    <Suspense fallback={null}>
      <Wrapper
        $isFlipped={isFlipped}
        className={`flipCard ${isFlipped ? 'flipped' : ''}`}
        onClick={() => {
          setIsFlipped((prev) => !prev);
        }}
      >
        <FrontCard $isFlipped={isFlipped} ref={frontRef}>
          <LogoContainer>
            <LogoImage alt="logo" width={100} height={100} src={logoSrc} />
          </LogoContainer>
          <Title>
            {/* <div style={{ width: '25px', height: '25px' }}> */}
            <Image alt="ribbon" src={ribbonSrc} width={25} height={25} />
            {/* </div> */}
            <TitleStrong> 기부 증서</TitleStrong>
          </Title>
          <CertificationContainer>
            <Image width={167} height={259} alt="certification img" src={certification.certImgUrl} />
          </CertificationContainer>
          <Container>
            <p style={{ textDecoration: 'underline' }}>{`Donor's name`}</p>
            <p>{certification.donorsNameList.join(', ')}</p>
          </Container>
          <strong>{certification.boxCreatedBy}</strong>
          <strong>{certification.certCreatedAt}</strong>
        </FrontCard>

        <BackCard $isFlipped={isFlipped} ref={backRef}>
          <LogoContainer>
            <LogoImage alt="logo" width={100} height={100} src={logoSrc} />
          </LogoContainer>
          <Title>
            <Image alt="ribbon" src={ribbonSrc} width={25} height={25} />
            <TitleStrong> 기부 증서</TitleStrong>
          </Title>
          <CertificationContainer>
            <Image width={167} height={259} alt="certification img" src={certification.certImgUrl} />
          </CertificationContainer>
          <Container>
            <p>소중한 나눔에 동참해 주셔서 고맙습니다.</p>
            <p>
              남은 마음은 <strong>{certification.name}</strong> 위해 사용 됩니다.
              <br /> 앞으로 받은 만큼 베푸는 <strong>{certification.boxCreatedBy}</strong>이 되겠습니다.
            </p>
          </Container>
          <strong>{certification.boxCreatedBy}</strong>
          <strong>{certification.certCreatedAt}</strong>
        </BackCard>
      </Wrapper>

      <Button onClick={() => handleDownload(isFlipped ? backRef : frontRef)}>저장</Button>
    </Suspense>
  );
}
export default Certification;

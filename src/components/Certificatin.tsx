import Image from 'next/image';
import styled from 'styled-components';
import useSWR from 'swr';

import { useBox } from '@/api/box/hooks/useBox';
import logoSrc from '@/public/logo.png';
import ribbonSrc from '@/public/ribbonOutline.png';
import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.div`
  width: 329px;
  height: 616px;
  background-color: #ffffff;
  border: 1px solid #334075;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    ${getTypographyStyles('Caption_M')};
    font-size: 14px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
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

type CertificationProps = {
  imageUrl: string;
  boxId: number;
};
function Certification(props: CertificationProps) {
  const { boxId, imageUrl } = props;

  const { data: box } = useBox(boxId);

  console.log('box', box);
  return (
    <Wrapper>
      <Image alt="logo" width={100} src={logoSrc} />
      <Title>
        <Image alt="ribbon" src={ribbonSrc} width={25} height={25} />
        <strong> 기부 증서</strong>
      </Title>
      {/* <ErrorBoundary errorComponent={undefined}> */}
      <CertificationContainer>
        <img width={167} height={259} alt="certification img" src={imageUrl} />
      </CertificationContainer>
      {/* </ErrorBoundary> */}
      <Container>
        <p>소중한 나눔에 동참해 주셔서 고맙습니다.</p>
        <p>
          남은 마음은 [그린피스] 위해 사용 됩니다.
          <br /> 앞으로 받은 만큼 베푸는 `이오선경`이 되겠습니다.
        </p>
      </Container>
      <strong>이오선경</strong>
      <strong>2023.02.02</strong>
    </Wrapper>
  );
}
export default Certification;

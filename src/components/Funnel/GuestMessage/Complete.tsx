import Image from 'next/image';
import { useRouter } from 'next/navigation';
import mailOutlineSrc from 'public/MailOutline.png';
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

type CompleteProps = {
  register?: UseFormRegister<FieldValues>;
  onNext: MouseEventHandler<HTMLButtonElement>;
};

function Complete(props: CompleteProps) {
  const { onNext } = props;
  const router = useRouter();

  return (
    <Wrapper>
      <h3>Birthday Card was sent succesfully!</h3>
      <Container>
        <Image width={230} height={230} src={mailOutlineSrc} alt="mail" />
        <p>
          친구에게 축하 메시지가 <br />
          전달될 예정이에요!
        </p>
      </Container>
      <p>
        나만의 상자를 만들어 <br /> 친구들에게 축하 메시지를 받아보세요!
      </p>
      <Button onClick={onNext}>내 상자 만들러가기</Button>
    </Wrapper>
  );
}
export default Complete;

import Image from 'next/image';
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
  justify-content: space-between;
  align-items: center;
  text-align: center;

  h3 {
    ${getTypographyStyles('Headline3_B')}
  }

  p {
    ${getTypographyStyles('Body2_M')}
  }
`;
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > :first-child {
    margin-bottom: 56px;
  }

  & > :nth-child(3) {
    margin-bottom: 82px;
  }
  & > :last-child {
    margin-bottom: 30px;
  }
`;

type CompleteProps = {
  register?: UseFormRegister<FieldValues>;
  onNext: MouseEventHandler<HTMLButtonElement>;
};

function Complete(props: CompleteProps) {
  const { onNext } = props;

  return (
    <Wrapper>
      <Container>
        <h3>Birthday Card was sent succesfully!</h3>

        <Image width={230} height={230} src={mailOutlineSrc} alt="mail" />
        <p>
          친구에게 축하 메시지가 <br />
          전달될 예정이에요!
        </p>
        <p>
          나만의 상자를 만들어 <br /> 친구들에게 축하 메시지를 받아보세요!
        </p>
      </Container>

      <Button onClick={onNext}>내 상자 만들러가기</Button>
    </Wrapper>
  );
}
export default Complete;

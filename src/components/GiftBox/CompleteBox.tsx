'use client';

import styled from 'styled-components';

import FixedBottomCTA from '@/components/FixedBottomCTA';
import Gift from '@/components/GiftBox';
import { DonationBox } from '@/shared/types/donationBox';
import { getTypographyStyles } from '@/styles/fonts';
import SharedButton from '../SharedButton';

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

type CompleteBoxProps = {
  donationBox: DonationBox;
};

function CompleteBox(props: CompleteBoxProps) {
  const { donationBox } = props;

  const host = window.location.host;
  const url = `https://${host}/guest/${donationBox.boxId}`;

  return (
    <Wrapper>
      <Container>
        <h3>기부 상자가 완성 됐어요!</h3>
        <Gift $width="100%">
          <Gift.Box color={donationBox.color} />
          <Gift.Title text={donationBox.boxTitle} />
          <Gift.Description text={donationBox.boxDescription} />
        </Gift>
        <TextContainer>
          <p>
            기부 상자를 공유하면 <br />
            친구들에게 축하 메시지를 받을 수 있어요!
          </p>
        </TextContainer>
      </Container>
      <FixedBottomCTA>
        <SharedButton url={url} />
      </FixedBottomCTA>
    </Wrapper>
  );
}

export default CompleteBox;

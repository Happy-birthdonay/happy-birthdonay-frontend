'use client';

import Image from 'next/image';
import styled from 'styled-components';

import Button from '@/components/Button';
import newBoxButton from '@/public/newBoxButton.png';
import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    ${getTypographyStyles('Headline3_B')}
  }
  p {
    ${getTypographyStyles('Body2_M')}
  }
`;

export default function MakeNewBox() {
  return (
    <Wrapper>
      <h3>
        Make your own
        <br />
        Donation Box!
      </h3>
      <Image alt="add box button" src={newBoxButton} />
      <p>
        선물 상자를 만들어 <br />
        기부를 시작해 보세요
      </p>
    </Wrapper>
  );
}

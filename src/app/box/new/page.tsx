'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import styled from 'styled-components';

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
  const router = useRouter();
  const pathname = usePathname();
  //box 리스트를 가져온 후 박스 리스트가 있을때와 없을때를 분기처리 해야할 함
  const makeNewBox = () => {
    router.push(`${pathname}/funnel`);
  };

  return (
    <Wrapper>
      <h3>
        Make your own
        <br />
        Donation Box!
      </h3>
      <button onClick={makeNewBox}>
        <Image alt="add box button" src={newBoxButton} />
      </button>
      <p>
        선물 상자를 만들어 <br />
        기부를 시작해 보세요
      </p>
    </Wrapper>
  );
}

'use client';

import { usePathname, useRouter } from 'next/navigation';
import styled from 'styled-components';

import { DonationBox } from '@/shared/types/donationBox';
import { getTypographyStyles } from '@/styles/fonts';
import Gift from '.';
import Button from '../Button';
import FixedBottomCTA from '../FixedBottomCTA';

const Wrapper = styled.div``;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  justify-content: center;
  align-content: space-between;
  gap: 20px;

  height: auto;
  overflow: auto;
  margin-bottom: 20px;
  max-height: 560px;
  p {
    ${getTypographyStyles('Body2_M')}
  }
`;

type BoxListProps = {
  boxList: Pick<DonationBox, 'boxId' | 'color'>[];
};

function BoxList(props: BoxListProps) {
  const { boxList } = props;

  const router = useRouter();
  const pathName = usePathname();

  return (
    <Wrapper>
      <Container>
        {boxList.length <= 0 ? (
          <button
            onClick={() => {
              router.push(`${pathName}/new`);
            }}
          >
            <Gift $width={'150px'}>
              <Gift.Box color={'white'} />
              <Gift.Description text={'새 상자 생성하기'} />
            </Gift>
          </button>
        ) : (
          boxList.map((box) => (
            <button
              key={box.boxId}
              onClick={() => {
                router.push(`${pathName}/${box.boxId}`);
              }}
            >
              <Gift $width={'150px'}>
                <Gift.Box color={box.color} />
              </Gift>
            </button>
          ))
        )}
      </Container>
      <FixedBottomCTA>
        <Button onClick={() => router.push(`${pathName}/new`)}> 새 상자 만들기 </Button>
      </FixedBottomCTA>
    </Wrapper>
  );
}

export default BoxList;

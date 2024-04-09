'use client';

import { usePathname, useRouter } from 'next/navigation';
import styled from 'styled-components';

import { getTypographyStyles } from '@/styles/fonts';
import { DonationBox } from '@/types/donationBox';
import Gift from '.';
import Button from '../Button';

const Wrapper = styled.div``;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  justify-content: center;
  align-content: space-between;
  gap: 20px;

  height: calc(100vh - 110px);
  overflow: auto;
  margin-bottom: 20px;
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
          <Gift
            $width={'150px'}
            onClick={() => {
              router.push(`${pathName}/new`);
            }}
          >
            <Gift.Box color={'white'} />
          </Gift>
        ) : (
          boxList.map((box) => (
            <Gift
              key={box.boxId}
              $width={'150px'}
              onClick={() => {
                router.push(`${pathName}/${box.boxId}`);
              }}
            >
              <Gift.Box color={box.color} />
            </Gift>
          ))
        )}
      </Container>
      <Button onClick={() => router.push(`${pathName}/new`)}> 새 상자 만들기 </Button>
    </Wrapper>
  );
}

export default BoxList;

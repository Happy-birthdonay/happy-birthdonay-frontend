import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import ChevronLeft from '@/public/chevron-left.svg';

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 60px;
  /* background-color: #333; */
  border: 1px solid red;
  max-width: 392px;
`;

function Header() {
  const router = useRouter();

  return (
    <Wrapper>
      <button>
        <Image onClick={() => router.back()} width={34} height={34} src={ChevronLeft} alt="back" />
      </button>
    </Wrapper>
  );
}

export default Header;

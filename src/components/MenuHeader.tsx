'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import MenuIcon from '@/public/icon/menu.svg';

const Wrapper = styled.header`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 60px;
  max-width: 392px;
  display: flex;
  justify-content: flex-end;
  padding: 2px 8px;
`;

function MenuHeader() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/menu');
  };
  return (
    <Wrapper>
      <button onClick={handleClick}>
        <Image src={MenuIcon} alt="menu" width={34} height={34} />
      </button>
    </Wrapper>
  );
}

export default MenuHeader;

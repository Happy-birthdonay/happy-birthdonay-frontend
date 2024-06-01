'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import Header from '@/components/Header';
import { deleteUser } from '@/features/user/api/client';

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const MenuItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 10px;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
`;

function MenuPage() {
  const router = useRouter();

  const deleteTokenCookie = () => {
    const expires = new Date();
    expires.setHours(expires.getHours() - 1);

    // access_token을 삭제한다.
    document.cookie = `access_token=; expires=${expires.toUTCString()}; path=/;`;
    // refresh_token을 삭제한다.
    document.cookie = `refresh_token=; expires=${expires.toUTCString()}; path=/;`;

    console.log(document.cookie);
  };

  const logout = async () => {
    deleteTokenCookie();
    router.push('/');
  };

  const deleteAccount = async () => {
    if (confirm('정말 탈퇴하시겠습니까?')) {
      const response = await deleteUser();
      deleteTokenCookie();
      console.log('response', response);
      window.alert(response.message);

      router.push('/');
    }
  };

  return (
    <>
      <Header />
      <Wrapper>
        <MenuItem
          onClick={() => {
            router.push('/user/edit');
          }}
        >
          정보 수정
        </MenuItem>
        <MenuItem onClick={logout}>로그아웃</MenuItem>
        <MenuItem onClick={deleteAccount}> 탈퇴</MenuItem>
      </Wrapper>
    </>
  );
}

export default MenuPage;

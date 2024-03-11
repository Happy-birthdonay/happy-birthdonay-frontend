'use client';

import Image from 'next/image';
import styled from 'styled-components';

import LoginButton from '@/components/LoginButton';
import kakaoSrc from '@/public/kakao_logo.png';
import logoSrc from '@/public/logo.png';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 0 20px;
  padding-bottom: 75px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 500;
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 365px;
`;

const ButtonLogoContainer = styled.div`
  width: 35px;
  height: 35px;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 87px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;

export default function Home() {
  const REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };
  return (
    <Wrapper>
      <Container>
        <LogoContainer>
          <Image alt="logo" src={logoSrc} />
        </LogoContainer>
        <RightContainer>
          <p>환영합니다!</p>
        </RightContainer>
        <LeftContainer>
          <p>가치를 선물하기</p>
        </LeftContainer>
      </Container>
      <LoginButton onClick={loginHandler} $backgroundColor={'#FAE100'}>
        <ButtonContainer>
          <ButtonLogoContainer>
            <Image src={kakaoSrc} alt="kakao" />
          </ButtonLogoContainer>{' '}
          카카오로 1초 로그인
        </ButtonContainer>
      </LoginButton>
    </Wrapper>
  );
}

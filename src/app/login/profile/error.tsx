'use client';

import { useRouter } from 'next/navigation';
// Error components must be Client Components
import { useEffect } from 'react';
import styled from 'styled-components';

import Button from '@/components/Button';

const Wrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Container = styled.div`
  width: 100%;

  display: flex;
  gap: 10px;
  padding: 10px;
`;

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Wrapper>
      <p>{error.message}</p>
      <h2>죄송합니다. 에러가 발생 하였습니다.</h2>
      <Container>
        <Button
          $buttonType="secondary"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          재시도
        </Button>
        <Button onClick={() => router.push('/')}>홈으로 이동</Button>
      </Container>
    </Wrapper>
  );
}

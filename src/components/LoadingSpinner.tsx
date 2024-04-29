import styled, { keyframes } from 'styled-components';

const flash = keyframes`
0% {
    background-color: #FFF2;
    box-shadow: 1em 0 #FFF2, -1em 0 #FFF;
  }
  50% {
    background-color: #FFF;
    box-shadow: 1em 0 #FFF2, -1em 0 #FFF2;
  }
  100% {
    background-color: #FFF2;
    box-shadow: 1em 0 #FFF, -1em 0 #FFF2;
  }
`;

export const LoadingSpinner = styled.span`
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: #fff;
  box-shadow:
    1em 0 #fff,
    -1em 0 #fff;
  position: relative;
  animation: ${flash} 0.5s ease-out infinite alternate;
`;

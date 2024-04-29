import styled from 'styled-components';

import { getTypographyStyles } from '@/styles/fonts';

export const ErrorMessage = styled.p`
  ${getTypographyStyles('Caption2_M')};
  color: ${({ theme }) => theme.colors.main.red};
`;

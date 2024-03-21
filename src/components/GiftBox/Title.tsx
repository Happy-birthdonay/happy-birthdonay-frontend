import styled from 'styled-components';

import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.strong`
  ${getTypographyStyles('Body1_B')};
  margin-bottom: 18px;
`;

type TitleProps = {
  text: string;
};

function Title(props: TitleProps) {
  const { text } = props;
  return <Wrapper>{text}</Wrapper>;
}

export default Title;

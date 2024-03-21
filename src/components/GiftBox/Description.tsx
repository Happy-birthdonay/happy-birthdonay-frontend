import styled from 'styled-components';

import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.strong`
  ${getTypographyStyles('Caption2_M')};
  line-height: 20px;
`;

type DescriptionProps = {
  text: string;
};

function Description(props: DescriptionProps) {
  const { text } = props;
  return <Wrapper>{text}</Wrapper>;
}

export default Description;

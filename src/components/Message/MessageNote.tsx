'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import closeSrc from '@/public/icon/close.svg';
import { getTypographyStyles } from '@/styles/fonts';
import { Message, MessageTag } from '@/types/message';
import { TAG_COLOR } from '@/utils/const';
import ColorButton from '../ColorButton';
import { ColorChips } from '../Funnel/GuestMessage/GuestDetail';

const Wrapper = styled.div<{ $tag: MessageTag }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ $tag }) => TAG_COLOR[$tag].backgroundColor};
  border-radius: 20px;
  padding: 30px 26px;
  height: 527px;
  width: 100%;
  overflow: auto;
  flex: 1;
  color: ${({ theme }) => theme.colors.main.white};
  h3 {
    ${getTypographyStyles('Headline3_B')};
    margin-bottom: 22px;
  }
  p {
    ${getTypographyStyles('Caption_M')}
  }
`;

const Container = styled.div``;

const IconContainer = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
`;

type MessageNoteProps = {
  message: Message;
};
function MessageNote(props: MessageNoteProps) {
  const { message } = props;

  const router = useRouter();

  const tag = message?.tag ?? 'none';
  const colorTag = ColorChips.find((chip) => chip.key === tag);

  return (
    <Wrapper $tag={tag}>
      <IconContainer onClick={() => router.back()}>
        <Image alt="close-icon" src={closeSrc} />
      </IconContainer>
      <Container>
        <h3>{message?.createdBy}</h3>
        <p>{message.contents}</p>
      </Container>
      <ColorButton type="button" key={colorTag!.key} $chipColor={colorTag!.color}>
        {colorTag!.children}
      </ColorButton>
    </Wrapper>
  );
}

export default MessageNote;

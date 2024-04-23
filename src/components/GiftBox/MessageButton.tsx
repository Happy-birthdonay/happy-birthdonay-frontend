'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import { TAG_COLOR } from '@/shared/consts/const';
import { MessageTag } from '@/shared/types/message';
import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.div<{ tag: MessageTag }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  border-radius: 23px;
  text-align: left;
  background-color: ${(props) => TAG_COLOR[props.tag].backgroundColor};
  border: 3px solid ${(props) => TAG_COLOR[props.tag].border};
  padding: 15px 18px;
  h3 {
    ${getTypographyStyles('Headline3_B')}
  }
`;

const CreatedBy = styled.p`
  word-break: keep-all;
  ${getTypographyStyles('Body2_B')}
`;

const Contents = styled.p`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;

  ${getTypographyStyles('Body2_M')}
`;

type MessageButtonProps = {
  boxId: number;
  createdBy: string;
  tag: MessageTag;
  contents: string;
  messageId: number;
};

function MessageButton(props: MessageButtonProps) {
  const { boxId, createdBy, tag, contents, messageId } = props;
  const router = useRouter();

  return (
    <Wrapper tag={tag} onClick={() => router.push(`/box/${boxId}/message/${messageId}`)}>
      <CreatedBy>{createdBy}</CreatedBy>
      <Contents>{contents.trim()}</Contents>
    </Wrapper>
  );
}

export default MessageButton;

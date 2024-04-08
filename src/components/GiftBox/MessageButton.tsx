'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import { getTypographyStyles } from '@/styles/fonts';
import { MessageTag } from '@/types/message';

const TAG_COLOR = {
  health: {
    border: '#844AFF',
    backgroundColor: '#DEE21B',
  },
  peace: {
    border: '#6ACD4F',
    backgroundColor: '#FC5E33',
  },
  happiness: {
    border: '#EFBEED',
    backgroundColor: '#4FADF5',
  },
  love: {
    border: '#E8555F',
    backgroundColor: '#EFBEED',
  },
} as const;

const Wrapper = styled.div<{ tag: MessageTag }>`
  //grid
  display: grid;
  grid-template-columns: 1fr 3fr;

  border-radius: 23px;

  background-color: ${(props) => TAG_COLOR[props.tag].backgroundColor};
  border: 3px solid ${(props) => TAG_COLOR[props.tag].border};
  padding: 15px 18px;
  h3 {
    ${getTypographyStyles('Headline3_B')}
  }
`;

const CreatedBy = styled.p`
  word-break: keep-all;
  ${getTypographyStyles('Body2_M')}
`;

const Contents = styled.p`
  //한줄 로 표시
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  //한줄이 넘어가면 말 줄임표

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
      <Contents>{contents}</Contents>
    </Wrapper>
  );
}

export default MessageButton;

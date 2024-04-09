import styled from 'styled-components';

import { getMessageList } from '@/api/message/server';
import { MessageTag } from '@/types/message';
import { TAG_COLOR } from '@/utils/const';

type MessageDetailPageProps = {
  params: { boxId: string; id: string };
};

async function MessageDetailPage(props: MessageDetailPageProps) {
  const { params } = props;

  const { data: messageList } = await getMessageList(Number(params.boxId));
  const message = messageList.find((message) => message.messageId === Number(params.id));

  if (!message) return null;
  return (
    <div style={{ backgroundColor: TAG_COLOR[message.tag]?.backgroundColor }}>
      {message?.contents} {message?.createdBy}
    </div>
  );
}
export default MessageDetailPage;

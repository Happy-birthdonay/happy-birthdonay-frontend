'use server';

import { getMessageList } from '@/api/message/server';
import MessageButton from '../GiftBox/MessageButton';

type MessageButtonListProps = {
  boxId: number;
};
async function MessageButtonList(props: MessageButtonListProps) {
  const { boxId } = props;

  const { data: messageList } = await getMessageList(boxId);

  return (
    <>
      {messageList.map((message) => (
        <MessageButton
          key={message.messageId}
          boxId={message.boxId}
          messageId={message.messageId}
          tag={message.tag}
          contents={message.contents.trim()}
          createdBy={message.createdBy.trim()}
        />
      ))}
    </>
  );
}
export default MessageButtonList;

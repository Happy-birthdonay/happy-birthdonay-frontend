import { getMessageList } from '@/api/message/server';

type MessageDetailPageProps = {
  params: { boxId: string; id: string };
};

async function MessageDetailPage(props: MessageDetailPageProps) {
  const { params } = props;

  console.log('Mess here', params);
  const { data: messageList } = await getMessageList(Number(params.boxId));
  console.log('messageList Herere', messageList);
  const message = messageList.find((message) => message.messageId === Number(params.id));
  return (
    <div>
      {message?.contents} {message?.createdBy}
    </div>
  );
}
export default MessageDetailPage;

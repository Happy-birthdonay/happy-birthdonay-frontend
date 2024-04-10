import { getMessageList } from '@/api/message/server';
import MessageNote from '@/components/Message/MessageNote';
import styles from './message.module.css';

type MessageDetailPageProps = {
  params: { boxId: string; id: string };
};

async function MessageDetailPage(props: MessageDetailPageProps) {
  const { params } = props;

  const { data: messageList } = await getMessageList(Number(params.boxId));
  const message = messageList.find((message) => message.messageId === Number(params.id));

  if (!message) return null;
  return (
    <div className={styles.center}>
      <h3 className={styles.title}>Message Card</h3>
      <MessageNote message={message} />
    </div>
  );
}
export default MessageDetailPage;

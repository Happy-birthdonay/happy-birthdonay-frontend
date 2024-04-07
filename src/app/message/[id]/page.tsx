import { getMessageList } from '@/api/message/server';

async function MessageDetailPage() {
  const response = await getMessageList();
  console.log('response', response);
  return <div>111</div>;
}
export default MessageDetailPage;

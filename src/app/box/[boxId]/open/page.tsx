'use sever';

import { revalidatePath } from 'next/cache';

import { getBoxDetail } from '@/api/box/server';
import { getMessageList } from '@/api/message/server';
import Opened from '@/components/Funnel/DonationBox/Opened';
import MessageButton from '@/components/GiftBox/MessageButton';
import MessageList from '@/components/Message/MessageList';

type PageProps = {
  params: { boxId: string };
};
async function Page(props: PageProps) {
  const { params } = props;

  const boxId = Number(params.boxId);
  const { data: box } = await getBoxDetail(boxId);
  const { data: messageList } = await getMessageList(boxId);

  console.log('box', box);
  return (
    <div>
      {box.isDonated ? (
        <MessageList boxId={boxId}>
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
        </MessageList>
      ) : (
        <Opened box={box} messageList={messageList} />
      )}
    </div>
  );
}

export default Page;

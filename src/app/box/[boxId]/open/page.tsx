'use sever';

import { headers } from 'next/headers';

import Opened from '@/components/Funnel/DonationBox/Opened';
import MessageButton from '@/components/GiftBox/MessageButton';
import MessageList from '@/components/Message/MessageList';
import SharedButton from '@/components/SharedButton';
import { getBoxDetail } from '@/features/box/api/server';
import { getMessageList } from '@/features/message/api/server';

type PageProps = {
  params: { boxId: string };
};

async function Page(props: PageProps) {
  const { params } = props;

  const boxId = Number(params.boxId);
  const { data: box } = await getBoxDetail(boxId);
  const { data: messageList } = await getMessageList(boxId);
  //messageList 중복 contents 제거
  const uniqueMessageList = messageList.filter(
    (message, index, self) =>
      self.findIndex((t) => t.contents === message.contents && t.createdBy === message.createdBy) === index
  );

  const host = headers().get('host');
  const url = `https://${host}/guest/${boxId}`;

  return (
    <>
      {/* Before Open */}
      {box.isDonated ? (
        <MessageList boxId={boxId}>
          {uniqueMessageList.length === 0 ? (
            <>
              <p>공유하고 메시지 받기 !</p>
              <SharedButton url={url} />
            </>
          ) : (
            uniqueMessageList.map((message) => (
              <MessageButton
                key={message.messageId}
                boxId={message.boxId!}
                messageId={message.messageId!}
                tag={message.tag!}
                contents={message.contents!.trim()}
                createdBy={message.createdBy!.trim()}
              />
            ))
          )}
        </MessageList>
      ) : (
        // After Open
        <Opened box={box} messageList={messageList} />
      )}
    </>
  );
}

export default Page;

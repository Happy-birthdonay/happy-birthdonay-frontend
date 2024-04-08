'use sever';

import { getBoxDetail } from '@/api/box/server';
import Opened from '@/components/Funnel/DonationBox/Opened';
import MessageButtonList from '@/components/Message/MessageButtonList';
import MessageList from '@/components/Message/MessageList';

type PageProps = {
  params: { boxId: string };
};
async function Page(props: PageProps) {
  const { params } = props;

  const boxId = Number(params.boxId);
  const { data: box } = await getBoxDetail(boxId);
  return (
    <div>
      {box.isDonated ? (
        <Opened box={box} />
      ) : (
        <MessageList boxId={boxId}>
          <MessageButtonList boxId={boxId} />
        </MessageList>
      )}
    </div>
  );
}

export default Page;

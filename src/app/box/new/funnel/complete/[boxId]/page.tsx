'use server';

import { getBoxDetailGuest } from '@/api/box/server';
import CompleteBox from '@/components/GiftBox/CompleteBox';

type CompletePageProps = {
  params: { boxId: string };
};
async function CompletePage(props: CompletePageProps) {
  const { params } = props;
  const { data: box } = await getBoxDetailGuest(Number(params.boxId));

  return <CompleteBox donationBox={box} />;
}

export default CompletePage;

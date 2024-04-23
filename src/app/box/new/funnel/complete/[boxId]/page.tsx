'use server';

import CompleteBox from '@/components/GiftBox/CompleteBox';
import { getBoxDetailGuest } from '@/features/box/api/server';

type CompletePageProps = {
  params: { boxId: string };
};
async function CompletePage(props: CompletePageProps) {
  const { params } = props;
  const { data: box } = await getBoxDetailGuest(Number(params.boxId));

  return <CompleteBox donationBox={box} />;
}

export default CompletePage;

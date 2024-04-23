'use server';

import GuestEnter from '@/components/Guest/GuestEnter';
import { getBoxDetailGuest } from '@/features/box/api/server';

type GuestPageProps = {
  params: { boxId: string };
};

async function GuestPage(props: GuestPageProps) {
  const { params } = props;
  const response = await getBoxDetailGuest(Number(params.boxId));
  const { data: box } = response;

  return <GuestEnter box={box} />;
}

export default GuestPage;

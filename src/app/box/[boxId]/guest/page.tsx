'use server';

import { getBoxDetailGuest } from '@/api/box/server';
import GuestEnter from '@/components/Guest/GuestEnter';

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

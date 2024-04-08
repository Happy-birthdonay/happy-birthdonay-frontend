'use sever';

import dayjs from 'dayjs';

import { getBoxDetail } from '@/api/box/server';
import BeforeOpened from '@/components/Funnel/DonationBox/BeforeOpened';
import CanOpen from '@/components/Funnel/DonationBox/CanOpen';

type PageProps = {
  params: { boxId: string };
};
async function Page(props: PageProps) {
  const { params } = props;

  const { data: box } = await getBoxDetail(Number(params.boxId));

  const isOpenAfter = () => {
    const today = dayjs();
    const openDate = dayjs(box.openDate);
    return today.isAfter(openDate);
  };

  return <div>{isOpenAfter() ? <CanOpen box={box} /> : <BeforeOpened box={box} />}</div>;
}

export default Page;

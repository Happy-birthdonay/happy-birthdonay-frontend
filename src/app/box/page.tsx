import BoxList from '@/components/GiftBox/BoxList';
import { getBoxList } from '@/features/box/api/server';

async function Page() {
  const { data: boxList } = await getBoxList();

  return (
    <div>
      <BoxList boxList={boxList} />
    </div>
  );
}

export default Page;

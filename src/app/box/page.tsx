import { getBoxList } from '@/api/box/server';
import BoxList from '@/components/GiftBox/BoxList';

async function Page() {
  const { data: boxList } = await getBoxList();
  console.log(boxList);

  return (
    <div>
      <BoxList boxList={boxList} />
    </div>
  );
}

export default Page;

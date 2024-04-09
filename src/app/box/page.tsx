import { getBoxList } from '@/api/box/server';

async function Page() {
  const { data } = await getBoxList();
  console.log(data);

  return <div>box</div>;
}

export default Page;

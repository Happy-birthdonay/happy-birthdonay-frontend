import { redirect } from 'next/navigation';

import BoxList from '@/components/GiftBox/BoxList';
import { getBoxList } from '@/features/box/api/server';
import { getUser } from '@/features/user/api/server';

async function Page() {
  const response = await getBoxList();
  const { data: boxList } = response;

  const userResponse = await getUser();
  const { data: user } = userResponse;

  if (!user) {
    window.alert('로그인을 다시 시도해 주세요.');
    redirect('/');
  }

  if (!boxList) {
    console.error(response.msg);
    return <div>{response.msg}</div>;
  }
  return (
    <div>
      <BoxList boxList={boxList} />
    </div>
  );
}

export default Page;

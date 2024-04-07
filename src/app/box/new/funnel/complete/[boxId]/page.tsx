'use server';

import { getBoxDetail } from '@/api/box/server';
import CompleteBox from '@/components/GiftBox/CompleteBox';

type CompletePageProps = {
  params: { boxId: string };
};
async function CompletePate(props: CompletePageProps) {
  const { params } = props;
  const response = await getBoxDetail(Number(params.boxId));
  console.log('CompletePage response', response);
  // url 에 해당하는 기부 상자 id 로 API 요청해서 상자 데이터를 가져와야함.
  return <CompleteBox donationBox={response.data} />;
}

export default CompletePate;

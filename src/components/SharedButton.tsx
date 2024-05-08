'use client';

import Image from 'next/image';

import ShardIconUrl from '@/public/icon/share-16.svg';
import { copyClipBoard } from '@/shared/utils/copyClipBoard';
import Button from './Button';

type SharedButtonProps = {
  url: string;
};
function SharedButton(props: SharedButtonProps) {
  const { url } = props;
  const handleCopyClipBoard = () => {
    copyClipBoard(url);
  };

  return (
    <Button onClick={handleCopyClipBoard} $buttonType="primary">
      <Image alt="share icon" src={ShardIconUrl} />
      공유하기
    </Button>
  );
}

export default SharedButton;

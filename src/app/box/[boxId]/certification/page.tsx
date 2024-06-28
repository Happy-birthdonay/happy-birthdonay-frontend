'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';

import Button from '@/components/Button';
import Certification from '@/components/Certification/Certification';
import FixedBottomCTA from '@/components/FixedBottomCTA';
import ImageUpload from '@/components/ImageUpload';
import { postCertificationByBoxId } from '@/features/box/api/client';
import { useCertification } from '@/features/box/api/hooks/useCertifications';
import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  @media screen and (max-height: 850px) {
    justify-content: space-between;
    padding-bottom: 60px;
  }
  h3 {
    ${getTypographyStyles('Headline3_B')}
  }
`;

const Body2_M = styled.p`
  ${getTypographyStyles('Body2_M')}
`;

const Container = styled.div`
  position: relative;
  background-color: #fff;
  width: 227px;
  height: 227px;
  img {
    position: absolute;
    top: 40px;

    transform: translateX(-50%);
  }
`;

function Page() {
  const { boxId } = useParams();
  const { certification } = useCertification(boxId as string);
  const [step, setStep] = useState<'upload' | 'complete'>(!!certification?.certImgUrl ? 'complete' : 'upload');
  // const [step, setStep] = useState<'upload' | 'complete'>('complete');

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onUploadS3 = async (file: File) => {
    try {
      setIsLoading(true);

      const imageData = new FormData();
      imageData.append('imageData', file);

      await postCertificationByBoxId(Number(boxId), imageData);
      setStep('complete');
      // }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      {step === 'upload' && (
        <>
          <h3>Donation Certification</h3>
          <Container>
            <ImageUpload
              onLoadendAction={(img, file) => {
                setPreviewImage(img);
                setFile(file);
              }}
            />
            {previewImage && <img src={previewImage} alt="Preview" style={{ maxWidth: '300px', maxHeight: '300px' }} />}
          </Container>
          <Body2_M>
            기부를 인증할 수 있는 <br />
            이미지를 첨부해주세요
          </Body2_M>
          <Body2_M>(중요한 개인정보를 반드시 가려주세요)</Body2_M>
          <FixedBottomCTA>
            <Button
              isLoading={isLoading}
              disabled={!previewImage}
              onClick={async () => {
                try {
                  await onUploadS3(file as File);
                } catch (e) {
                  console.error('error', e);
                }
              }}
            >
              기부 증서 만들기
            </Button>
          </FixedBottomCTA>
        </>
      )}
      {step === 'complete' && (
        <>
          <Certification />
        </>
      )}
    </Wrapper>
  );
}
export default Page;

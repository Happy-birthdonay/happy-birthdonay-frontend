'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';

import { uploadImageToS3 } from '@/actions/uploadS3';
import { patchCertificationImageUrl } from '@/api/box/client';
import { useCertification } from '@/api/box/hooks/useCertifications';
import Button from '@/components/Button';
import Certification from '@/components/Certification/Certification';
import ImageUpload from '@/components/ImageUpload';
import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  h3 {
    ${getTypographyStyles('Headline3_B')}
  }

  p {
    ${getTypographyStyles('Body2_M')}
  }
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

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 14px;
`;

function Page() {
  const { boxId } = useParams();
  const { certification } = useCertification(boxId as string);
  const [step, setStep] = useState<'upload' | 'complete'>(certification?.certImgUrl ? 'complete' : 'upload');

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const fileName = `cert-images/${boxId}-certifiaction`;

  const onUploadS3 = async (file: File) => {
    try {
      const response = await uploadImageToS3({ fileName, file });
      if (response.Location) {
        await patchCertificationImageUrl(Number(boxId), response.Location);
        setStep('complete');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Wrapper>
      {step === 'upload' && (
        <>
          <h3>
            Make your <br />
            Donation Certification
          </h3>
          <Container>
            <ImageUpload
              onLoadendAction={(img, file) => {
                setPreviewImage(img);
                setFile(file);
              }}
            />
            {previewImage && <img src={previewImage} alt="Preview" style={{ maxWidth: '300px', maxHeight: '300px' }} />}
          </Container>
          <p>
            기부를 인증할 수 있는 <br />
            이미지를 첨부해주세요
          </p>
          <p>(중요한 개인정보를 반드시 가려주세요)</p>
          <Button
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
        </>
      )}
      {step === 'complete' && (
        <>
          <Certification />
          <ButtonContainer>
            <Button $buttonType="secondary">저장하기</Button> <Button>공유하기</Button>
          </ButtonContainer>
        </>
      )}
    </Wrapper>
  );
}
export default Page;

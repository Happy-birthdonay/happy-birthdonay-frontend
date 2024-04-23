'use client';

import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';

type uploadImageToS3Props = {
  fileName?: string;
  file: File;
};

const REGION = 'ap-northeast-2';
const accessKeyId = process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID as string;
const secretAccessKey = process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY as string;

export const uploadImageToS3 = async (props: uploadImageToS3Props) => {
  const { fileName, file } = props;

  const s3 = new S3Client({
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
    region: REGION,
  });

  const params = {
    Bucket: 'hbdy-s3',
    Key: file.name,
    Body: file,
    ContentType: file.type,
  };

  const upload = new Upload({
    client: s3,
    params,
  });

  const response = await upload.done();
  return response;
};
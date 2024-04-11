'use client';

import AWS from 'aws-sdk';

type uploadImageToS3Props = {
  fileName?: string;
  file: File;
};

const REGION = 'ap-northeast-2';
const accessKeyId = process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID as string;
const secretAccessKey = process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY as string;

export const uploadImageToS3 = async (props: uploadImageToS3Props) => {
  const { fileName, file } = props;

  AWS.config.update({
    region: REGION,
    accessKeyId,
    secretAccessKey,
  });

  const upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: 'hbdy-s3',
      Key: file.name,
      Body: file,
      ContentType: file.type,
      ACL: 'public-read', // Set the access control to public-read
    },
  });
  const response = await upload.promise();
  console.log('uploadImageToS3 response', response);
  return response;

  // try {
  //   const data = await s3.upload(params).promise();
  //  return data;
  //   // You can store this URL in state or use it as needed in your application
  // } catch (err) {
  //   console.error(err);
  // }
};

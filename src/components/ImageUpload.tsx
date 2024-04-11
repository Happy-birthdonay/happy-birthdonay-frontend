import React from 'react';

type ImageUploadProps = {
  onLoadendAction: (img: string, formData: File) => void;
};

function ImageUpload(props: ImageUploadProps) {
  const { onLoadendAction } = props;
  // const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files && event.target.files[0];
      if (file) {
        if (file.type === 'image/png' || file.type === 'image/jpeg') {
          const image = window.URL.createObjectURL(file);

          const formData = new FormData();
          formData.append('file', file);
          formData.append('name', file.name);
          onLoadendAction(image, file);
        } else {
          alert('Please select a PNG or JPEG file.');
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <input type="file" accept=".png, .jpeg, .jpg" onChange={handleImageChange} />
    </div>
  );
}

export default ImageUpload;

import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

interface ImageUploadProps {
  onImageChange?: (file: File | null) => void;
  defaultImageUrl?: string | null;
}

type FormValues = {
  image: FileList | undefined;
};

const ImageUpload = ({
  onImageChange,
  defaultImageUrl = null,
}: ImageUploadProps) => {
  const { control, watch } = useForm<FormValues>();
  const [imagePreview, setImagePreview] = useState<string | null>(
    defaultImageUrl
  );
  const imageFile = watch('image');

  useEffect(() => {
    if (imageFile?.length) {
      const file = imageFile[0];
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);

      if (onImageChange) {
        onImageChange(file);
      }

      return () => URL.revokeObjectURL(objectUrl); // 메모리 해제
    } else {
      setImagePreview(defaultImageUrl || null);
      if (onImageChange) {
        onImageChange(null);
      }
    }
  }, [imageFile, onImageChange]);

  return (
    <div>
      <Controller
        name="image"
        control={control}
        render={({ field }) => (
          <input
            type="file"
            accept="image/*"
            onChange={(e) => field.onChange(e.target.files)}
          />
        )}
      />

      {imagePreview && <img src={imagePreview} alt="미리보기 이미지" />}
    </div>
  );
};

export default ImageUpload;

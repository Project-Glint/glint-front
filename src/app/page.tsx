'use client';

import { ImageUpload, RadioButton, Select } from 'components';
import { useForm } from 'react-hook-form';

/**
 * App HOME
 * @return {JSX}
 */
export default function Home() {
  const { control } = useForm({
    defaultValues: { gender: 'male' },
  });
  const radioList = [
    { key: 'male', label: '남자' },
    { key: 'female', label: '여자' },
  ];

  const selectList = [
    { key: 'male', label: '남자' },
    { key: 'female', label: '여자' },
  ];

  const handleImageChange = (file: File | null) => {
    if (file) {
      console.log('upload file:', file);
    } else {
      console.log('delete image');
    }
  };
  return (
    <div>
      <h1>Home</h1>
      <RadioButton control={control} radioList={radioList} name="gender" />
      <div style={{ marginLeft: '100px' }}>
        <Select
          control={control}
          name="selectGender"
          placeholder="select Gender"
          selectList={selectList}
        />
      </div>
      <ImageUpload
        onImageChange={handleImageChange}
        defaultImageUrl="https://via.placeholder.com/100"
      />
    </div>
  );
}

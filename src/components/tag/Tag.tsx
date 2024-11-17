import { useEffect, useState } from 'react';
import { Control, useController } from 'react-hook-form';
import { Badge, TextController } from 'components';
import * as S from './Tag.styled';

interface TagProps {
  name: string;
  control: Control<any>;
  initialTags?: string[];
}

const Tag = ({ name, control, initialTags = [] }: TagProps) => {
  const [tagItem, setTagItem] = useState('');
  const [tagList, setTagList] = useState<string[]>([]);
  const { field } = useController({
    name,
    control,
    defaultValue: initialTags,
  });

  useEffect(() => {
    if (initialTags?.length > 0) {
      setTagList(initialTags);
    }
  }, [initialTags]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === 'Enter' &&
      tagItem.trim() !== '' &&
      !e.nativeEvent.isComposing
    ) {
      e.preventDefault();
      if (tagList.length >= 10) {
        // TODO: toast or alert
        console.log(`태그는 최대 10개 까지 작성 가능합니다.`);
        setTagItem('');
        return;
      }
      if (tagList.includes(tagItem.trim())) {
        // TODO: toast or alert
        console.log('이미 추가된 태그입니다.');
        return;
      }
      const newTagList = [...tagList, tagItem.trim()];
      setTagList(newTagList);
      field.onChange(newTagList);
      setTagItem('');
    }
  };

  const handleDelete = (index: number) => {
    const newTagList = tagList.filter((_: string, i: number) => i !== index);
    setTagList(newTagList);
    field.onChange(newTagList);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagItem(e.target.value);
  };

  return (
    <S.TagContainer>
      <TextController
        name={name}
        control={control}
        rules={{ required: false, minLength: 1, maxLength: 15 }}
        placeholder="키워드 입력 후 엔터를 쳐주세요."
        handleKeyDown={handleKeyDown}
        value={tagItem}
        onChange={handleInputChange}
      />
      {tagList?.map((tag: string, index: number) => (
        <Badge
          items={{
            key: tag,
            label: tag,
            icon: <button onClick={() => handleDelete(index)}>X</button>,
          }}
          key={index}
          isClickable={false}
        />
      ))}
    </S.TagContainer>
  );
};

export default Tag;

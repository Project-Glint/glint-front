import { useEffect, useState } from 'react';
import { Control } from 'react-hook-form';
import { Chip, TextController } from 'components';
import * as S from './Tag.styled';
import { WhiteXIcon } from 'assets';

interface TagProps {
  name: string;
  control: Control<any>;
  initialTags?: string[];
  maxLength?: number;
  handleChange: (value: string[]) => void;
}

const Tag = ({
  name,
  control,
  initialTags = [],
  maxLength,
  handleChange,
}: TagProps) => {
  const [tagItem, setTagItem] = useState('');
  const [tagList, setTagList] = useState<string[]>([]);

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
      setTagItem('');
      handleChange(newTagList);
    }
  };

  const handleDelete = (index: number) => {
    const newTagList = tagList.filter((_: string, i: number) => i !== index);
    setTagList(newTagList);
    handleChange(newTagList);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagItem(e.target.value);
  };

  return (
    <S.TagContainer>
      <TextController
        name={name}
        control={control}
        value={tagItem}
        placeholder="키워드 입력 후 엔터를 쳐주세요."
        cancelIcon
        onCancelClick={() => setTagItem('')}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
        maxLength={maxLength}
      />
      {tagList?.map((tag: string, index: number) => (
        <Chip
          items={{
            key: tag,
            label: tag,
          }}
          key={index}
          handleClick={() => handleDelete(index)}
          size="lg"
          selectedKeys={tagList}
          icon={<WhiteXIcon />}
        />
      ))}
    </S.TagContainer>
  );
};

export default Tag;

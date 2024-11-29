import { Badge, SignupFooter, TextController } from 'components';
import * as S from './SignupKeywork.styled';
import { SignupForm } from 'types';
import { useFormContext } from 'react-hook-form';
import { useState } from 'react';
import { WhiteXIcon } from 'assets';

interface SignupKeywordProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  MAX_PAGE: number;
}

const SignupKeywork = ({ page, setPage, MAX_PAGE }: SignupKeywordProps) => {
  const { control, watch, getValues, handleSubmit, setValue } =
    useFormContext<SignupForm>();
  const hashTags = watch('hashtags');
  const hashTagList = hashTags?.map((tag) => ({
    key: tag,
    label: tag,
    icon: <WhiteXIcon />,
  }));
  const [hashTag, setHashTag] = useState('');
  const isNextButtonEnabled = hashTagList?.length > 0;
  const handleClickNext = (data: SignupForm) => {
    console.log('data', data);
    if (isNextButtonEnabled) {
      setPage(page + 1);
    }
  };

  const handleClickPrev = () => {
    setPage(page - 1);
  };

  const clickEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const currentTags = getValues('hashtags');
      if (
        currentTags.includes(e.currentTarget.value) ||
        currentTags.length > 10
      ) {
        return;
      }
      setValue('hashtags', [...currentTags, e.currentTarget.value]);
      setHashTag('');
    }
  };

  const clickBadge = (key: string) => {
    const currentTags = getValues('hashtags');
    const updatedTags = currentTags.filter((tag) => tag !== key);
    setValue('hashtags', updatedTags);
  };

  return (
    <>
      <S.Container>
        <S.InputLabel>나를 표현하는 키워드</S.InputLabel>
        <S.TextControllerBox>
          <TextController
            name="hashtag"
            control={control}
            value={hashTag}
            onChange={(e) => setHashTag(e.target.value)}
            onKeyDown={clickEnter}
            placeholder="키워드 입력 후 엔터를 쳐주세요."
            cancelIcon
            onCancelClick={() => setHashTag('')}
            maxLength={15}
          />
          <Badge
            items={hashTagList}
            isClickable
            selectedKeys={hashTags}
            handleClick={clickBadge}
          />
        </S.TextControllerBox>
      </S.Container>
      <SignupFooter
        page={page}
        maxPage={MAX_PAGE}
        isNextButtonEnabled={isNextButtonEnabled}
        handleClickNext={handleSubmit(handleClickNext)}
        handleClickPrev={handleClickPrev}
      />
    </>
  );
};

export default SignupKeywork;

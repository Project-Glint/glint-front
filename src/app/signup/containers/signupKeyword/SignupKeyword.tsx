import { SignupFooter, Tag } from 'components';
import * as S from './SignupKeyword.styled';
import { SignupForm } from 'types';
import { useFormContext } from 'react-hook-form';
import { usePostHashtags } from 'hooks';

interface SignupKeywordProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  MAX_PAGE: number;
}

const SignupKeyword = ({ page, setPage, MAX_PAGE }: SignupKeywordProps) => {
  const { control, watch, handleSubmit, setValue } =
    useFormContext<SignupForm>();
  const hashTags = watch('hashtags');
  const hashTagList = hashTags?.map((tag) => ({
    key: tag,
    label: tag,
  }));
  const isNextButtonEnabled = hashTagList?.length > 0;

  const { mutate: postHashtags } = usePostHashtags();

  const handleClickNext = () => {
    if (isNextButtonEnabled) {
      if (hashTags.length > 0) {
        postHashtags(
          { hashtags: hashTags },
          {
            onSuccess: () => {
              setPage(page + 1);
            },
          }
        );
      }
    }
  };

  const handleClickPrev = () => {
    setPage(page - 1);
  };

  const handleChange = (value: string[]) => {
    setValue('hashtags', value);
  };

  return (
    <>
      <S.Container>
        <S.InputLabel>나를 표현하는 키워드</S.InputLabel>
        <S.TextControllerBox>
          <Tag
            name="hashtag"
            control={control}
            maxLength={15}
            handleChange={(value) => handleChange(value)}
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

export default SignupKeyword;

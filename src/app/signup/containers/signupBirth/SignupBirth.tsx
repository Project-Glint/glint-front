import { useFormContext } from 'react-hook-form';
import { SignupForm } from 'types';
import * as S from './SignupBirth.styled';
import { SignupFooter, TextController } from 'components';
import { usePostBirthdate } from 'hooks';

interface SignupBirthProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  MAX_PAGE: number;
}

const SignupBirth = ({ page, setPage, MAX_PAGE }: SignupBirthProps) => {
  const { control, watch, getValues, handleSubmit } =
    useFormContext<SignupForm>();
  const year = watch('year');
  const month = watch('month');
  const day = watch('day');
  const birthdate = year + '-' + month + '-' + day;
  const isNextButtonEnabled = !!year && !!month && !!day;

  const { mutate: postBirthdate } = usePostBirthdate();

  const handleClickNext = () => {
    if (isNextButtonEnabled) {
      if (birthdate) {
        postBirthdate(
          {
            birthdate: birthdate,
          },
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
  return (
    <>
      <S.Container>
        <S.InputLabel>생년월일</S.InputLabel>
        <S.BirthContainer>
          <TextController
            name="year"
            control={control}
            placeholder="YYYY"
            cancelIcon
            type="number"
            rules={{
              required: '연도를 입력해주세요.',
              pattern: {
                value: /^[0-9]{4}$/,
                message: '연도는 4자리 숫자여야 합니다.',
              },
              min: {
                value: 1900,
                message: '연도는 1900 이상이어야 합니다.',
              },
              max: {
                value: new Date().getFullYear(),
                message: `연도는 ${new Date().getFullYear()} 이하이어야 합니다.`,
              },
            }}
            maxLength={4} // HTML 입력 제한
            onInput={(e) => {
              // 4글자 이상 입력 방지
              e.currentTarget.value = e.currentTarget.value.slice(0, 4);
            }}
          />
          <TextController
            name="month"
            control={control}
            placeholder="MM"
            cancelIcon
            type="number"
            rules={{
              required: '월을 입력해주세요.',
              pattern: {
                value: /^[0-9]{1,2}$/,
                message: '월은 1~2자리 숫자여야 합니다.',
              },
              min: {
                value: 1,
                message: '월은 1 이상이어야 합니다.',
              },
              max: {
                value: 12,
                message: '월은 12 이하이어야 합니다.',
              },
            }}
            maxLength={2} // HTML 입력 제한
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.slice(0, 2); // 2자리로 제한
            }}
          />
          <TextController
            name="day"
            control={control}
            placeholder="DD"
            cancelIcon
            type="number"
            rules={{
              required: '일을 입력해주세요.',
              pattern: {
                value: /^[0-9]{1,2}$/,
                message: '일은 1~2자리 숫자여야 합니다.',
              },
              min: {
                value: 1,
                message: '일은 1 이상이어야 합니다.',
              },
              max: {
                value: 31,
                message: '일은 31 이하이어야 합니다.',
              },
              validate: (value) => {
                // 월과 연도에 따른 유효한 일인지 검사
                const { year, month } = getValues(); // 다른 필드 값 가져오기
                const isValidDate = (y: number, m: number, d: number) => {
                  const date = new Date(y, m - 1, d);
                  return (
                    date.getFullYear() === y &&
                    date.getMonth() === m - 1 &&
                    date.getDate() === d
                  );
                };
                if (isValidDate(Number(year), Number(month), Number(value))) {
                  return true;
                }
                return '유효한 날짜가 아닙니다.';
              },
            }}
            maxLength={2} // HTML 입력 제한
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.slice(0, 2); // 2자리로 제한
            }}
          />
        </S.BirthContainer>
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

export default SignupBirth;

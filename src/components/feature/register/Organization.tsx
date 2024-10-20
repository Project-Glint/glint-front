import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import * as S from './Organization.styled';
import { TextController, TextareaController } from 'components/controller';
import { Button } from 'components/button';

interface FormData {
  companyName: string;
  jobTitle: string;
  description: string;
}

export default function Organization() {
  const { handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      companyName: '',
      jobTitle: '',
      description: '',
    },
  });

  const onSumbit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const onErrors: SubmitErrorHandler<FormData> = (errors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onSumbit, onErrors)}>
      <S.Container>
        <S.ContentBox>
          <S.InputBox>
            <S.Label>직장</S.Label>
            <TextController
              name="companyName"
              control={control}
              rules={{ required: true, minLength: 2, maxLength: 15 }}
              placeholder="삼성전자, 현대 자동차, 네이버 등"
            />
          </S.InputBox>
          <S.InputBox>
            <S.Label>직업</S.Label>
            <TextController
              name="jobTitle"
              control={control}
              rules={{ required: true, minLength: 2, maxLength: 15 }}
              placeholder="의사, 개발자, 공무원, 은행원 등"
            />
          </S.InputBox>
          <S.InputBox>
            <S.Label>설명</S.Label>
            <TextareaController
              name="description"
              control={control}
              placeholder="직업 관련 설명해주세요."
            />
          </S.InputBox>
        </S.ContentBox>
        <Button type="submit">저장</Button>
      </S.Container>
    </form>
  );
}

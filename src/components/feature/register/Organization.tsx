import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import * as S from './Organization.styled';
import {
  Button,
  RadioButton,
  Select,
  Tag,
  TextController,
  TextareaController,
  ImageUpload,
  Tabs,
  Badge,
} from 'components';
import { GENDER_RADIOS } from 'assets';
import { useState } from 'react';

interface FormData {
  companyName: string;
  jobTitle: string;
  description: string;
  select: string; // TODO: name 변경
  gender: (typeof GENDER_RADIOS)[number]['key'] | null;
  profile: File[];
  keyword: string[];
}

const selectList = [
  { key: 'male', label: '남자' },
  { key: 'female', label: '여자' },
];

const tabList = [
  { key: 'officeWorker', label: '직장인' },
  { key: 'student', label: '대학생' },
];

export default function Organization() {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const { handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      companyName: '',
      jobTitle: '',
      description: '',
      select: '',
      gender: null,
      profile: [],
      keyword: [],
    },
  });
  const onClickBadge = (key: string, isMultiple: boolean) => {
    if (isMultiple) {
      setSelectedKeys((prev) =>
        prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
      );
    } else {
      setSelectedKeys((prev) => (prev.includes(key) ? [] : [key]));
    }
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const onErrors: SubmitErrorHandler<FormData> = (errors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onErrors)}>
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
          <S.InputBox>
            <S.Label>성별</S.Label>
            <RadioButton
              control={control}
              radioList={GENDER_RADIOS}
              name="gender"
            />
          </S.InputBox>
          <S.InputBox>
            <S.Label>직업</S.Label>
            <Tabs tabList={tabList} />
          </S.InputBox>
          <S.InputBox>
            <S.Label>흡연</S.Label>
            <Badge
              items={[
                { key: '1', label: '111' },
                { key: '2', label: '222' },
                { key: '3', label: '333' },
                { key: '4', label: '444' },
                { key: '5', label: '555' },
                { key: '6', label: '666' },
              ]}
              isClickable={true}
              selectedKeys={selectedKeys}
              handleClick={(key) => onClickBadge(key, false)}
            />
          </S.InputBox>
          <S.InputBox>
            <S.Label>선택</S.Label>
            <Select
              control={control}
              name="select"
              placeholder="Select Gender"
              selectList={selectList}
            />
          </S.InputBox>
          <S.InputBox>
            <S.Label>키워드</S.Label>
            <Tag control={control} name="keyword" />
          </S.InputBox>
          <S.InputBox>
            <S.Label>프로필</S.Label>
            <ImageUpload name="profile" control={control} imageLength={6} />
          </S.InputBox>
        </S.ContentBox>
        <Button type="submit" outline={false} size="lg">
          저장
        </Button>
      </S.Container>
    </form>
  );
}

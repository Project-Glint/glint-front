import { jobTabList } from 'assets';
import { SignupFooter, Tabs, TextController } from 'components';
import * as S from './SignupJob.styled';
import { useFormContext } from 'react-hook-form';
import { useState, useEffect, useRef } from 'react';
import { CompanyInfo, DepartmentInfo, SignupForm, UniversityInfo } from 'types';
import {
  useGetCompanyName,
  useGetDepartmentName,
  useGetUniversityName,
  usePostOccupation,
} from 'hooks';
import { debounce } from 'lodash';

type Tab = 'worker' | 'student';
type Name = 'companyName' | 'occupation' | 'universityName' | 'departmentName';
interface OccupationId {
  companyId: number | null;
  universityId: number | null;
  departmentId: number | null;
}

interface SignupJobProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  MAX_PAGE: number;
}

const SignupJob = ({ page, setPage, MAX_PAGE }: SignupJobProps) => {
  // TODO: 전역관리로 수정
  const [activeTab, setActiveTab] = useState<Tab>(jobTabList[0].key as Tab);
  const [showSearchList, setShowSearchList] = useState({
    first: false,
    second: false,
  });
  const [occupationId, setOccupationId] = useState<OccupationId>({
    companyId: null,
    universityId: null,
    departmentId: null,
  });
  const searchListRef = useRef<HTMLUListElement>(null);
  const { control, watch, handleSubmit, setValue } =
    useFormContext<SignupForm>();
  const { data: companyResponse, mutate: searchCompanyName } =
    useGetCompanyName();
  const { data: universityResponse, mutate: searchUniversityName } =
    useGetUniversityName();
  const { data: departmentResponse, mutate: searchDepartmentName } =
    useGetDepartmentName();
  const { mutate: saveOccupation } = usePostOccupation();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchListRef.current &&
        !searchListRef.current.contains(e.target as Node)
      ) {
        setShowSearchList({ first: false, second: false });
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [companyName, occupation, universityName, departmentName] = watch([
    'companyName',
    'occupation',
    'universityName',
    'departmentName',
  ]);

  const isActiveWorker = activeTab === 'worker';
  const nameMapping: Record<string, Name> = isActiveWorker
    ? { first: 'companyName', second: 'occupation' }
    : { first: 'universityName', second: 'departmentName' };

  const firstResponse = isActiveWorker ? companyResponse : universityResponse;

  const isNextButtonEnabled = isActiveWorker
    ? !!companyName && !!occupation
    : !!universityName && !!departmentName;

  const debouncedSearch = debounce(
    (search: string, type: 'first' | 'second') => {
      if (search.length < 2) return;

      if (type === 'first') {
        setShowSearchList((prev) => ({ ...prev, first: true }));
        if (isActiveWorker) {
          searchCompanyName(search);
          return;
        }
        searchUniversityName(search);
        return;
      }
      if (!isActiveWorker) {
        setShowSearchList((prev) => ({ ...prev, second: true }));
        searchDepartmentName(search);
      }
    }
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'first' | 'second'
  ) => {
    const value = e.target.value;

    const name = nameMapping[type];
    setValue(name, value);
    if (!(isActiveWorker && type === 'second')) {
      debouncedSearch(value, type);

      if (isActiveWorker) {
        setOccupationId((prev) => ({
          ...prev,
          companyId: null,
        }));
        return;
      }

      if (type === 'first') {
        setOccupationId((prev) => ({
          ...prev,
          universityId: null,
        }));
        return;
      }

      setOccupationId((prev) => ({
        ...prev,
        departmentId: null,
      }));
    }
  };

  const handleTabChange = (key: string) => {
    setActiveTab(key as Tab);
  };

  const renderContent = (worker: string, student: string) => {
    return isActiveWorker ? worker : student;
  };

  const handleClickNext = (data: SignupForm) => {
    if (!isNextButtonEnabled) return;

    if (isActiveWorker) {
      if (occupationId.companyId === null) return;
      saveOccupation({
        certType: 'WORKER',
        companyId: occupationId.companyId,
        occupation: data.occupation,
      });
    } else {
      if (
        occupationId.universityId === null ||
        occupationId.departmentId === null
      )
        return;
      saveOccupation({
        certType: 'ACADEMIC',
        universityId: occupationId.universityId,
        departmentId: occupationId.departmentId,
      });
    }
    setPage(page + 1);
  };

  const handleClickPrev = () => {
    setPage(page - 1);
  };

  const handleFirstItem = (selectedItem: CompanyInfo | UniversityInfo) => {
    setValue(
      nameMapping.first,
      'companyName' in selectedItem
        ? selectedItem.companyName
        : selectedItem.universityName
    );
    if (isActiveWorker) {
      setOccupationId((prev) => ({
        ...prev,
        companyId: (selectedItem as CompanyInfo).companyId,
      }));
    } else {
      setOccupationId((prev) => ({
        ...prev,
        universityId: (selectedItem as UniversityInfo).universityId,
      }));
    }
    setShowSearchList((prev) => ({ ...prev, first: false }));
  };

  const handleSecondItem = (selectedItem: DepartmentInfo) => {
    setValue('departmentName', selectedItem.departmentName);
    setOccupationId((prev) => ({
      ...prev,
      departmentId: selectedItem.departmentId,
    }));
    setShowSearchList((prev) => ({ ...prev, second: false }));
  };

  const clickCancleFirst = () => {
    if (isActiveWorker) {
      setOccupationId((prev) => ({
        ...prev,
        companyId: null,
      }));
      return;
    }
    setOccupationId((prev) => ({
      ...prev,
      universityId: null,
    }));
  };

  const clickCancelSecond = () => {
    setOccupationId((prev) => ({
      ...prev,
      departmentId: null,
    }));
  };

  return (
    <>
      <Tabs tabList={jobTabList} onChange={handleTabChange} />
      <S.InputWrapper>
        <S.InputLabel>{renderContent('직장', '학교')}</S.InputLabel>
        <TextController
          name={renderContent('companyName', 'universityName')}
          control={control}
          value={renderContent(watch('companyName'), watch('universityName'))}
          onChange={(e) => handleInputChange(e, 'first')}
          rules={{
            required: true,
            minLength: {
              value: 2,
              message: '직장은 2 ~ 15글자로 입력해 주세요.',
            },
            maxLength: {
              value: 15,
              message: '직장은 2 ~ 15글자로 입력해 주세요.',
            },
          }}
          placeholder={renderContent(
            '삼성전자, 현대 자동차, 네이버 등',
            '한국대학교, 가나다대학교 등'
          )}
          cancelIcon
          onCancelClick={clickCancleFirst}
        />
        {showSearchList.first && firstResponse && (
          <S.SearchList ref={searchListRef}>
            {firstResponse.data?.length === 0 ? (
              <S.Empty>검색 결과가 없습니다.</S.Empty>
            ) : (
              firstResponse.data?.map((item, index) => (
                <S.ListItem key={index} onClick={() => handleFirstItem(item)}>
                  {'companyName' in item
                    ? item.companyName
                    : item.universityName}
                </S.ListItem>
              ))
            )}
          </S.SearchList>
        )}
      </S.InputWrapper>
      <S.InputWrapper>
        <S.InputLabel>{renderContent('직업', '학과')}</S.InputLabel>
        <TextController
          name={renderContent('occupation', 'departmentName')}
          control={control}
          value={renderContent(watch('occupation'), watch('departmentName'))}
          onChange={(e) => handleInputChange(e, 'second')}
          rules={{
            required: true,
            minLength: {
              value: 2,
              message: '직업은 2 ~ 15글자로 입력해 주세요.',
            },
            maxLength: {
              value: 15,
              message: '직업은 2 ~ 15글자로 입력해 주세요.',
            },
          }}
          placeholder={renderContent(
            '의사, 개발자, 공무원, 은행원 등',
            '경영학과, 컴퓨터공학과 등'
          )}
          cancelIcon
          onCancelClick={clickCancelSecond}
        />
        {showSearchList.second && departmentResponse && (
          <S.SearchList ref={searchListRef}>
            {departmentResponse.data?.length === 0 ? (
              <S.Empty>검색 결과가 없습니다.</S.Empty>
            ) : (
              departmentResponse.data?.map((item, index) => (
                <S.ListItem key={index} onClick={() => handleSecondItem(item)}>
                  {item.departmentName}
                </S.ListItem>
              ))
            )}
          </S.SearchList>
        )}
      </S.InputWrapper>
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

export default SignupJob;

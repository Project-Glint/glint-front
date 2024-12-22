'use client';

import { BackLayout, Chip, HomeFooter, TextController } from 'components';
import { useForm } from 'react-hook-form';
import * as S from './page.styled';
import { useState } from 'react';
import { CaretDownIcon } from 'assets';
import { ConditionFilter } from './containers';
const keywordList = [
  { rankId: 1, keyword: '롯데제과' },
  { rankId: 2, keyword: '삼성SDI' },
  { rankId: 3, keyword: '리디북스' },
  { rankId: 4, keyword: '포스코인터내셔널' },
  { rankId: 5, keyword: '케이티앤지' },
  { rankId: 6, keyword: '아모레퍼시픽그룹' },
  { rankId: 7, keyword: '금호석유화학' },
  { rankId: 8, keyword: '미래에셋대우' },
  { rankId: 9, keyword: 'KB금융지주' },
  { rankId: 10, keyword: '메리츠화재' },
];
const Search = () => {
  const { control, watch } = useForm();
  const keyword = watch('keyword');

  const [isSearching, setIsSearching] = useState(false);
  const [activeFilter, setActiveFilter] = useState('');

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setIsSearching(true);
    }
  };

  const handleFilterClick = (key: string) => {
    console.log('key', key);
    setActiveFilter(key);
  };

  console.log('activeFilter', activeFilter);

  return (
    <BackLayout
      searchChildren={
        <TextController
          name="keyword"
          control={control}
          placeholder="관심사, 태그, 지역명 등을 검색해 보세요"
          searchIcon
          cancelIcon={keyword ? true : false}
          onKeyDown={handleSearch}
        />
      }
    >
      {isSearching ? (
        <S.ResultContainer>
          <S.ResultTitleWrapper>
            <S.Title>검색 결과</S.Title>
            <S.FilterWrapper>
              <Chip
                size="md"
                items={{ key: 'meeting', label: '미팅방' }}
                icon={<CaretDownIcon />}
                handleClick={() => handleFilterClick('meetingRoom')}
              />
              <Chip
                size="md"
                items={{ key: 'participant', label: '참가자' }}
                icon={<CaretDownIcon />}
                handleClick={() => handleFilterClick('participant')}
              />
              <ConditionFilter control={control} />
            </S.FilterWrapper>
          </S.ResultTitleWrapper>
        </S.ResultContainer>
      ) : (
        <>
          <S.CurrentSearchKeywordContainer>
            <S.TitleWrapper>
              <S.Title>최근 검색어</S.Title>
              <S.AllDelete>전체 삭제</S.AllDelete>
            </S.TitleWrapper>
          </S.CurrentSearchKeywordContainer>
          <S.PopularSearchKeywordContainer>
            <S.Title>인기 검색어</S.Title>
            <S.PopularSearchKeywordWrapper>
              {keywordList.map((item) => (
                <S.RankingItem key={item.rankId}>
                  <S.Rank rankId={item.rankId}>{item.rankId}</S.Rank>
                  <S.Keyword>{item.keyword}</S.Keyword>
                </S.RankingItem>
              ))}
            </S.PopularSearchKeywordWrapper>
          </S.PopularSearchKeywordContainer>
        </>
      )}
      <HomeFooter />
    </BackLayout>
  );
};

export default Search;
